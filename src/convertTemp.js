function convertTemp(input, system) {
  if (system === 'F') {
    return Math.floor((input - 273) * (9 / 5) + 32);
  }
  return Math.floor(input - 273);
}

export default convertTemp;
