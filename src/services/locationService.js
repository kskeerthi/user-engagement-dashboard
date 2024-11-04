import axios from 'axios';

const API_KEY = 'b253d8f1fe7a4effbade15b23feb28d4'; // Replace with your OpenCage API key

const fetchCoordinates = async (location) => {
  try {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
      params: {
        q: location,
        key: API_KEY,
        language: 'en', // You can specify the language
        limit: 1 // Limit to one result
      }
    });
    const { results } = response.data;
    if (results.length > 0) {
      const { geometry } = results[0];
      return [geometry.lng, geometry.lat]; // Return longitude and latitude
    }
  } catch (error) {
    console.error(`Error fetching coordinates for ${location}:`, error);
  }
  return null; // Return null if there was an error or no results
};

export default fetchCoordinates;
