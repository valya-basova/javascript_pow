const arrayContains = (arr, element) => arr.includes(element);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;