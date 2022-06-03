const apiUrl = 'https://api.nasa.gov/planetary/apod';
const apiKey = process.env.REACT_APP_NASA_KEY || '';
const baseURL = `${apiUrl}?api_key=${apiKey}`;

export { apiUrl, baseURL }