import React, { useEffect, useState } from 'react';

import { forecast } from '../services/WeatherService';

function Forecast(props) {
  const { city, country } = props.state;
  const [state, setState] = useState(null);

  useEffect(() => {
    getForecast(city, country);
  }, [city, country]);

  const getForecast = (city, country) => {
    forecast({city, country})
      .then(res => setState(res.data.list))
      .catch(error => console.log(error));
  }

  return (
    <section id="Forecast">
      <div className="container">
        <div className="row">
          {state && state.map((item ,key) => (
            <div className="col forecast" key={key}>
              <p><strong>Date</strong> : {new Date(item.dt * 1000).getHours()}:00</p>
              <p><strong>Temperature</strong> : {item.main.temp}</p>
              <p><strong>Humidity</strong> : {item.main.humidity}</p>
              <p><strong>Description</strong> : {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Forecast;