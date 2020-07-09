import React, { useState, useEffect } from 'react';
import BreedItem from './BreedItem';
import { fetchBreeds } from '../api';

const Breed = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreedList = async () => {
      const response = await fetchBreeds();
      setBreeds(response);
    };
    fetchBreedList();
  }, []);

  const options = breeds.map((breed) => (
    <option key={breed.id} id={breed.id} value={breed.id}>
      {breed.name}
    </option>
  ));

  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="control">
          <div className="select">
            <select onChange={handleSelectChange}>
              <option>Select dropdown</option>
              {options}
            </select>
          </div>
        </div>
        <br />
        <BreedItem id={selectedBreed} />
      </div>
    </>
  );
};

export default Breed;
