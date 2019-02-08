import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(undefined, err => {
  if (!err.response) {
    alert('We were not able to complete this process. Please wait a moment and then try again.');
  } else {
    alert(err.response.data.message);
  }
  return Promise.reject(err);
});

export default api;