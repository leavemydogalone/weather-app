import React, { useState, useEffect } from 'react';
import BackgroundImg from './BackgroundImg';
import Container from './Container';

function App() {
  const [result, setResult] = useState('');
  const [weatherType, setWeatherType] = useState('Sunny');

  // this should go in the form component
  function changeResult(input) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=8fa54f0ed9bc540b7c6de23a1a931209`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setResult(data);
      });
  }

  useEffect(() => {
    changeResult('hamburg');
  }, []);

  return (
    <div>
      <BackgroundImg />
      <Container change={changeResult} weather={weatherType} infoObj={result} />
    </div>
  );
}
export default App;
