const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());