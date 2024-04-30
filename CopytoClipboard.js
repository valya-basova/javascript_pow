const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isEven = (num) => num % 2 === 0;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;