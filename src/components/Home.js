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
      <div className="control">
        <button className="button is-primary" onClick={fetchRandomCat}>
          Random
        </button>
      </div>
      <br />
      <img className="home-image" src={catDetails.url} alt="cat" />
    </div>
  );
};

export default Home;
