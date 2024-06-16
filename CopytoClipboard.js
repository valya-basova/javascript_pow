const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const result = await makeHttpRequest(url);
const isEmptyArray = arr => !arr.length;