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

export const forecast = params =>
  new Promise((resolve, reject) => {
    api
      .get(`/forecast?q=${params.city},${params.country}&cnt=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => {
        if (res.error) {
          reject(res);
        } else {
          resolve(res);
        }
      })
      .catch(error => reject(error));
  });