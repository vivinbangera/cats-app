import axios from 'axios';

let config = {
  headers: {
    'x-api-key': process.env.REACT_APP_CAT_API_KEY,
  },
};

export const getRandomCat = async () => {
  let { data } = await axios.get(
    'https://api.thecatapi.com/v1/images/search',
    config
  );

  if (data && data.length) {
    return data[0];
  }
};

export const fetchBreeds = async () => {
  let { data } = await axios.get('https://api.thecatapi.com/v1/breeds', config);

  return data.map(breed => {
    return {
      name: breed.name,
      id: breed.id,
    };
  });
};

export const fetchSpecificBreed = async id => {
  if (!id) {
    return null;
  }
  let { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
    config
  );
  return data[0];
};

export const getCategories = async () => {
  let { data } = await axios.get(
    'https://api.thecatapi.com/v1/categories',
    config
  );
  return data;
};

export const getCatSearchResults = async params => {
  params && (config.params = params);

  let Response = await axios.get(
    'https://api.thecatapi.com/v1/images/search',
    config
  );
  return Response;
};
