const apmRootPath = path.join(repositoryRootPath, 'apm');
const flattenedArray = arr => [].concat(...arr);
const executableName = getExecutableName(channel, appName);