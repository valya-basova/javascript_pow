const flattenedArray = arr => [].concat(...arr);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();