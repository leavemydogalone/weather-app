import React from 'react';
function DayRow(props) {
  const { infoObj, system } = props;
  function convert(input) {
    // need to create a farneheight state in the container and do an if/then here
    if (system === 'F') {
      return Math.floor((input - 273) * (9 / 5) + 32);
    } else {
      return Math.floor(input - 273);
    }
  }
  let displayNum = infoObj ? convert(infoObj.list[0].main.temp) : 'Loading';
  return (
    <div className="dayRow">
      {displayNum} {system}°
      {/* {props.infoObj ? 'nothing' : props.infoObj.list[0].main.temp} */}
    </div>
  );
}
export default DayRow;
