const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const result = await makeHttpRequest(url);
const isTabInView = () => !document.hidden;