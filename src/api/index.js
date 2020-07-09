import axios from 'axios';

const getConfig = params => {
  let config = {
    headers: {
      'x-api-key': process.env.REACT_APP_CAT_API_KEY,
    },
  };
  if (params) {
    config.params = params;
  }
  return config;
};

const getData = (url, config) => {
  return axios.get(url, config);
};

export const getRandomCat = async () => {
  let { data } = await getData(
    'https://api.thecatapi.com/v1/images/search',
    getConfig()
  );

  if (data && data.length) {
    return data[0];
  }
};

export const fetchBreeds = async () => {
  let { data } = await getData(
    'https://api.thecatapi.com/v1/breeds',
    getConfig()
  );

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
  let { data } = await getData(
    'https://api.thecatapi.com/v1/images/search',
    getConfig({ breed_id: id })
  );
  return data[0];
};

export const getCategories = async () => {
  let { data } = await getData(
    'https://api.thecatapi.com/v1/categories',
    getConfig()
  );
  return data;
};

export const getCatSearchResults = async params => {
  let Response = await getData(
    'https://api.thecatapi.com/v1/images/search',
    getConfig(params)
  );
  return Response;
};
