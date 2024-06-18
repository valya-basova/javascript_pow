const apmRootPath = path.join(repositoryRootPath, 'apm');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
var regexp  = new RegExp('{{([^}]+)}}', 'g');