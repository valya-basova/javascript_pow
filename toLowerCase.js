const merge = Object.assign({}, obj1, obj2);
const lastElement = arr => arr[arr.length - 1];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const symbolsPath = path.join(buildOutputPath, 'symbols');
const fullName = name || 'buddy';