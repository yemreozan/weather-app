import React, { Fragment, useState, useEffect } from 'react';

import { weather } from '../services/WeatherService';

function Current(props) {
  const { city, country } = props.state;
  const [ state, setState ] = useState(null);

  useEffect(() => {
      getWeather(city, country);
  }, [city, country]);

  const getWeather = (city, country) => {
    weather({ city, country })
      .then(res => setState({
        temperature: res.data.main.temp,
        city: res.data.name,
        country: res.data.sys.country,
        humidity: res.data.main.humidity,
        description: res.data.weather[0].description,
      }))
      .catch(error => console.log(error));
  }

  return state && (
    <Fragment>
      <p><strong>Temperature</strong> : {state.temperature}</p>
      <p><strong>City</strong> : {state.city}</p>
      <p><strong>Country</strong> : {state.country}</p>
      <p><strong>Humidity</strong> : {state.humidity}</p>
      <p><strong>Description</strong> : {state.description}</p>
    </Fragment>
  )
}

export default Current;