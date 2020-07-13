import React, { useEffect, useState } from 'react';
import './Search.css';
import Pagination from './Pagination';
import { getCategories, fetchBreeds, getCatSearchResults } from '../api';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [breedId, setBreedId] = useState('');
  const [type, setType] = useState('All');
  const [order, setOrder] = useState('Random');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  // eslint-disable-next-line
  const [pageLimit, setPageLimit] = useState(9);
  const [images, setImages] = useState([]);

  const mime_map = {
    All: '',
    static: 'jpg,png',
    animated: 'gif',
  };

  let params = {
    size: 'medium',
    mime_types: mime_map[type],
    category_ids: categoryId,
    breed_id: breedId,
    order,
    limit: 9,
    format: 'json',
    page: currentPage,
  };
  // Stringify makes it easier to pass the object in the dependency array of useEffect.
  //Parse it before passing it as a parameter.
  params = JSON.stringify(params);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
    const fetchBreed = async () => {
      const breeds = await fetchBreeds();
      setBreeds(breeds);
    };
    fetchBreed();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getImages = async params => {
      const response = await getCatSearchResults(JSON.parse(params));
      setPageCount(response.headers['pagination-count']);
      setImages(response.data);
      setLoading(false);
    };
    getImages(params);
  }, [params]);

  const changePage = newPage => {
    setCurrentPage(newPage);
  };

  const categoryOptions = categories.map(category => (
    <option key={category.id} value={category.id} id={category.id}>
      {category.name}
    </option>
  ));

  const breedOptions = breeds.map(breed => (
    <option key={breed.id} id={breed.id} value={breed.id}>
      {breed.name}
    </option>
  ));

  //Loader color: #71c2cc

  return (
    <React.Fragment>
      <div className="search-container">
        <div className="column">
          <div className="field">
            <label className="label">Order</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={event => {
                    setOrder(event.target.value);
                  }}
                >
                  <option value="Random">Random</option>
                  <option value="Asc">Ascending</option>
                  <option value="Desc">Descending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={event => {
                    setCategoryId(event.target.value);
                  }}
                >
                  <option value="">Select dropdown</option>
                  {categoryOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={event => {
                    setType(event.target.value);
                  }}
                >
                  <option value="All">All</option>
                  <option value="static">Static</option>
                  <option value="animated">Animated</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Breed</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={event => {
                    setBreedId(event.target.value);
                  }}
                >
                  <option value="">Select dropdown</option>
                  {breedOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-results container">
        {loading && <div className="container">Loading...</div>}
        {images.map(image => (
          <img
            src={image.url}
            key={image.id}
            alt="Cat Pic"
            className="search_result"
          />
        ))}
        {images.length === 0 && !loading && (
          <div className="container">
            <h1 className="title">No Images Found</h1>
          </div>
        )}
      </div>
      <br />
      <div className="container">
        {parseInt(pageCount) !== 0 && (
          <Pagination
            pageCount={pageCount}
            pageLimit={pageLimit}
            currentPage={currentPage}
            handleClick={changePage}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Search;
