function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => {
      return a - b;
    }).filter((el, index, arr) => {
      return arr.indexOf(el) === index;
    });
  }