import React, { useState, useEffect } from 'react';
import { getRandomCat } from '../api';

import './Home.css';

const Home = () => {
  const [catDetails, setCatDetails] = useState(null);
  useEffect(() => {
    const fetchRandomCat = async () => {
      setCatDetails(await getRandomCat());
    };
    fetchRandomCat();
  }, []);

  const fetchRandomCat = async () => {
    setCatDetails(await getRandomCat());
  };

  if (!catDetails) {
    return 'Loading ...';
  }
  return (
    <div className="container">
      <img className="column home-image" src={catDetails.url} alt="cat" />
      <br />
      <div className="control">
        <button className="button is-primary" onClick={fetchRandomCat}>
          Random
        </button>
      </div>
    </div>
  );
};

export default Home;
