import React, { useState } from 'react';
import Form from './Form';
import DayRow from './DayRow';

function Container(props) {
  const [temp, setTemp] = useState('F');
  const { change, infoObj, weather } = props;
  return (
    <div className="container">
      <Form change={change} changeTemp={setTemp} system={temp} />
      <br />
      <div style={{ backgroundColor: 'red' }}>
        {infoObj
          ? infoObj.city.name + ' ' + infoObj.city.country
          : 'Loading...'}
      </div>
      <DayRow weather={weather} infoObj={infoObj} system={temp} />
    </div>
  );
}
export default Container;
