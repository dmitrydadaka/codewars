const hydrate = (s, w = [...s].filter(x => !isNaN(x)).reduce((a, b) => a + +b, 0)) => `${w} glass${w === 1 ? '' : 'es'} of water`;
