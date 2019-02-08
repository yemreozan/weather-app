import React, { Fragment, useState } from 'react';

import { weather } from '../services/WeatherService';

function Weather() {
  const initalState = {
    temperature : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
  }

  const [state, setState] = useState(initalState);
  const [city, setCity] = useState('Istanbul');
  const [country, setCountry] = useState('TR');

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

  return (
    <Fragment>
      <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
      <input type="text" value={country} onChange={e => setCountry(e.target.value)} />
      <button type="button" onClick={() => getWeather(city, country)}> Get Weather Status</button>
      <p><strong>Temperature</strong> : {state.temperature}</p>
      <p><strong>City</strong> : {state.city}</p>
      <p><strong>Country</strong> : {state.country}</p>
      <p><strong>Humidity</strong> : {state.humidity}</p>
      <p><strong>Description</strong> : {state.description}</p>
    </Fragment>
  )
}

export default Weather;