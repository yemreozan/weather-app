import React, { useState, useEffect }  from 'react';

function Location({ state, handleClick }) {
  const [city, setCity] = useState(state.city);
  const [country, setCountry] = useState(state.country);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('latitude:',position.coords.latitude);
        console.log('longitude:',position.coords.longitude);
      })
    }
  }, []);

  return (
    <div className="form-row">
      <div className="col-md-5 mt-3">
        <input type="text" className="form-control" value={city} onChange={e => setCity(e.target.value)}/>
      </div>
      <div className="col-md-5 mt-3">
        <input type="text" className="form-control" value={country} onChange={e => setCountry(e.target.value)}/>
      </div>
      <div className="col-md-2 mt-3">
        <button type="button" className="btn btn-block btn-light" onClick={() => handleClick({ city, country })}>Get Statuses</button>
      </div>
    </div>
  )
}

export default Location;