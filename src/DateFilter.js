function DateFilter(arrayOfObjects) {
  //arrayOfObjects is an array of 40 objects containing weather data
  let days = [[], [], [], [], [], []];

  let k = 0;
  for (let i = 1; i < 40; i++) {
    // this first if statement just puts the first object into the first days array
    if (!days[k][0]) {
      days[k].push(arrayOfObjects[0]);
    }
    // .dt_txt.substr(0, 10) is the part of a string containing the date
    if (
      arrayOfObjects[i].dt_txt.substr(0, 10) === days[k][0].dt_txt.substr(0, 10)
    ) {
      days[k].push(arrayOfObjects[i]);
    } else {
      days[k + 1].push(arrayOfObjects[i]);
      k++;
    }
  }
  console.log(days);
  return days;
}

export default DateFilter;
