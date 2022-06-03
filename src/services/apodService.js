import axios from 'axios'
import { baseURL } from '../config';

export const getImage = (date = '') => {
  // const url = `${apiUrl}?api_key=${apiKey}&date=${date}`;
  const url = `${baseURL}&date=${date}`;
  return axios.get(url);
}

export const fetchImage = async (date) => {
  // const url = `${apiUrl}?api_key=${apiKey}&date=${date}`;
  const url = `${baseURL}&date=${date}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        console.log(`Fetch response:`, response);
        console.log(`Fetch response code:`, response.code);
        if (!response?.ok) {
          reject({
            status: response.status,
            message: "Error on image request.",
            res: response
          })
        }
        response.json()
      })
      .then(imageData => resolve(imageData))
      .catch(err => {
          console.log(`Fetch error: ${err}`);
        reject(`"There was an error, please try again`)
      });
  });
  // try {
  //   const response = await fetch(url);
  //   console.log(response);
  //   const image = await response.json();
  //   return image;
  // } catch (error) {
  //   console.log(`Fetch error: ${error}`);
  //   Promise.reject(error);
  // }
}
