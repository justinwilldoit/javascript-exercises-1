const ftoc = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = celsius.toFixed(1);
  return parseFloat(celsius);
}

const ctof = function(celsius) {
  let fahrenheit = ((celsius / 5) * 9) + 32;
  fahrenheit = fahrenheit.toFixed(1);
  return parseFloat(fahrenheit);
}

module.exports = {
  ftoc,
  ctof
}
