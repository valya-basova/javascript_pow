const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log("1 && 2 = "+(1 && 2));