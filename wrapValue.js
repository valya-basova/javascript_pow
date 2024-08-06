const merge = [...new Set([...a, ...b])];
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);