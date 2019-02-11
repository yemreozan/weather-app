import React, { Fragment, useState } from 'react';

import Location from './Location';
import Current from './Current';
import Forecast from './Forecast';

function Weather() {
  const [state,setState] = useState({ city: 'Istanbul', country: 'TR'});

  return (
    <Fragment>
      <Location
        state={state}
        handleClick={setState}
      />
      <Current
        state={state}
      />
      <Forecast
        state={state}
      />
    </Fragment>
  )
}

export default Weather;

