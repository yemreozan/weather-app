import api from './api';

export const weather = params =>
  new Promise((resolve, reject) => {
    api
      .get(`/weather?q=${params.city},${params.country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => {
        if (res.error) {
          reject(res);
        } else {
          resolve(res);
        }
      })
      .catch(error => reject(error));
  });