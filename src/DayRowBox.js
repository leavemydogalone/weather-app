import React from 'react';
import convertTemp from './convertTemp';
function DayRowBox(props) {
  const { item, system } = props;

  function createOtherDate(input) {
    return input.substr(-8, 5);
  }
  const displayNum = convertTemp(item.main.temp, system);

  const date = createOtherDate(item.dt_txt);

  return (
    <div className="dayRowBox">
      {date}
      <br />
      {displayNum}
      {system}°
    </div>
  );
}
export default DayRowBox;
