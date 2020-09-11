import React, { useState, useEffect } from 'react';
import BackgroundImg from './BackgroundImg';
import Container from './Container';
import DateFilter from './DateFilter';

function App() {
  const [result, setResult] = useState('');
  const [weatherType, setWeatherType] = useState('Sunny');

  const [daysArray, setDaysArray] = useState('');

  function changeResult(input) {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=8fa54f0ed9bc540b7c6de23a1a931209`
    )
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        setResult(data);
        setDaysArray(DateFilter(data.list));
      })
      .catch((error) => {
        console.log(error);
        alert('Please enter a valid city name');
      });
  }

  useEffect(() => {
    changeResult('hamburg');
  }, []);

  return (
    <div className="App">
      <BackgroundImg setWeatherType={setWeatherType} />
      <Container
        setDaysArray={setDaysArray}
        daysArray={daysArray}
        change={changeResult}
        weather={weatherType}
        infoObj={result}
      />
    </div>
  );
}
export default App;
