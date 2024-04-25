const channelName = getChannelName(channel);
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
var arr3 = "jones".split('');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;