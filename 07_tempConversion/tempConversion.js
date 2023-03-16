const convertToCelsius = function(fahrenheit) {
  return celsius = Math.round(((fahrenheit - 32) / 1.8000) * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  return fahrenheit = Math.round(((celsius * 1.8000) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
