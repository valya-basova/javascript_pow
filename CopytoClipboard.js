const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const scriptRootPath = path.join(repositoryRootPath, 'script');
var arr1 = "john".split('');