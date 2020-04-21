import React, { useState, useEffect } from 'react';
import { fetchSpecificBreed } from '../api';
import LoadingSpinner from './LoadingSpinner';

const BreedItem = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [breedDetails, setBreedDetails] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchSpecificCatBreed = async () => {
      const details = await fetchSpecificBreed(id);
      console.log(details);
      setBreedDetails(details);
      setIsLoading(false);
    };
    fetchSpecificCatBreed();
  }, [id]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && breedDetails && (
        <>
          <img className="column" src={breedDetails.url} alt="cat" />
          <h3>{breedDetails.breeds[0].name}</h3>
          <table className="table is-striped">
            <tbody>
              <tr>
                <th>Characteristic</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Description</td>
                <td>{breedDetails.breeds[0].description}</td>
              </tr>
              <tr>
                <td>Alternate Names</td>
                <td>{breedDetails.breeds[0].alt_names}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>{breedDetails.breeds[0].origin}</td>
              </tr>
              <tr>
                <td>Weight (in Lbs)</td>
                <td>{breedDetails.breeds[0].weight.imperial}</td>
              </tr>
              <tr>
                <td>Weight (in kgs)</td>
                <td>{breedDetails.breeds[0].weight.metric}</td>
              </tr>
              <tr>
                <td>Temperament</td>
                <td>{breedDetails.breeds[0].temperament}</td>
              </tr>
              <tr>
                <td>Life Span</td>
                <td>{breedDetails.breeds[0].life_span}</td>
              </tr>
              <tr>
                <td>Affection Level</td>
                <td>{breedDetails.breeds[0].affection_level}</td>
              </tr>
              <tr>
                <td>Child Friendly</td>
                <td>{breedDetails.breeds[0].child_friendly}</td>
              </tr>
              <tr>
                <td>Dog Friendly</td>
                <td>{breedDetails.breeds[0].dog_friendly}</td>
              </tr>
              <tr>
                <td>Energy Level</td>
                <td>{breedDetails.breeds[0].energy_level}</td>
              </tr>
              <tr>
                <td>Intelligence</td>
                <td>{breedDetails.breeds[0].intelligence}</td>
              </tr>
              <tr>
                <td>Health Issues</td>
                <td>{breedDetails.breeds[0].health_issues}</td>
              </tr>
              <tr>
                <td>Vocalization</td>
                <td>{breedDetails.breeds[0].vocalization}</td>
              </tr>
              <tr>
                <td>Hypoallergenic</td>
                <td>{breedDetails.breeds[0].hypoallergenic}</td>
              </tr>
              <tr>
                <td>Social Needs</td>
                <td>{breedDetails.breeds[0].social_needs}</td>
              </tr>
              <tr>
                <td>Grooming</td>
                <td>{breedDetails.breeds[0].grooming}</td>
              </tr>
              <tr>
                <td>Wikipedia</td>
                <td>
                  <a target="_blank" rel="noopener noreferrer" href={breedDetails.breeds[0].wikipedia_url}>
                    {breedDetails.breeds[0].name} wiki
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default BreedItem;
