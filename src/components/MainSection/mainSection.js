import { useState, useEffect } from 'react';
import { ImageOfTheDay } from '../ImageOfTheDay';
import { DateForm } from '../DateForm/dateForm';
import { getImage } from '../../services/apodService';

export const MainSection = () => {
  const [imageOfTheDay, setImageOfTheDay] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Display initial image of the day
  useEffect(() => {
    // Fetch and set Image of the day
    getImage()
      .then(({ data }) => {
        setImageOfTheDay(data)
      })
      .catch(err => {
        console.log(`Error on Main section: ${err.message}`)
        setErrorMessage('There was an error, please try again.');
      });
  }, []); // Run only on mount

  return (
    <main className="main-section">
      <h2>Image of the Day</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <DateForm 
        setImageOfTheDay={setImageOfTheDay}
        setErrorMessage={setErrorMessage}
      />
      <ImageOfTheDay imageOfTheDay={imageOfTheDay} />
    </main>
  );
};
