import React, { useState, useEffect } from 'react';

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
        min: res.data.main.temp_min,
        max: res.data.main.temp_max,
        humidity: res.data.main.humidity,
        description: res.data.weather[0].description,
      }))
      .catch(error => console.log(error));
  }

  return state && (
    <section id="Current">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <i className="wa-sunny" />
          </div>
          <div className="col-12 mt-4 d-flex justify-content-center">
            <div className="row">
              <div className="col-12 mb-3">
                <h1>{state.temperature}</h1>
              </div>
              <div className="col-6">
                <h2><strong>L </strong>{state.min}</h2>
              </div>
              <div className="col-6">
                <h2><strong>H </strong>{state.max}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Current;