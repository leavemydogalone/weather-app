import React, { useState } from 'react';
import Form from './Form';
import DayRow from './DayRow';

function Container(props) {
  const [temp, setTemp] = useState('F');
  const { change, infoObj, weather, daysArray } = props;
  const rows = daysArray
    ? daysArray.map((thing) => (
        <DayRow
          key={thing[0].dt_txt.substr(5, 5)}
          weather={weather}
          infoObj={infoObj}
          system={temp}
          daysArray={thing}
        />
      ))
    : 'loading';
  return (
    <div className="container">
      <Form change={change} changeTemp={setTemp} system={temp} />
      <br />
      <div style={{ backgroundColor: 'red', marginTop: '12px' }}>
        {infoObj
          ? infoObj.city.name +
            ' ' +
            infoObj.city.country +
            ' - Five-Day Forecast'
          : 'Loading...'}
      </div>
      {rows}
    </div>
  );
}
export default Container;
