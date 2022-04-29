const apiUrl = 'https://api.nasa.gov/planetary/apod';
const apiKey = process.env.NASA_KEY || '<PUT_HERE_YOUR_KEYS>';
const baseURL = `${apiUrl}?api_key=${apiKey}`;

export { baseURL }