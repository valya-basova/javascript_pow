const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const maxNumber = arr => Math.max(...arr);
const flattenedArray = arr => [].concat(...arr);