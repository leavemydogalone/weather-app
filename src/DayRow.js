import React from 'react';

import DayRowBox from './DayRowBox';

function DayRow(props) {
  const { system, daysArray } = props;

  const boxItems = daysArray
    ? daysArray.map((thing) => (
        <DayRowBox key={thing.dt} system={system} item={thing} />
      ))
    : 'loading';

  return (
    <div className="dayRow">
      {daysArray ? (
        <div>
          {daysArray[0].dt_txt.substr(5, 5)}
          {boxItems}
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
}
export default DayRow;
