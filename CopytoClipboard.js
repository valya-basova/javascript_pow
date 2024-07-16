const results = await Promise.all(resultingPromises);
const repositoryRootPath = path.resolve(__dirname, '..');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;