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
          <div
            style={{
              fontSize: '20px',
              display: 'inline-block',
              backgroundColor: 'white',
              marginBottom: '15px',
            }}
          >
            {daysArray[0].dt_txt.substr(5, 5)}
          </div>
          {boxItems}
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
}
export default DayRow;
