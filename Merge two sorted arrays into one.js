function mergeArrays(arr1, arr2) {
    let res = [];
    arr1.concat(arr2).forEach(el => !res.includes(el) ? res.push(el) : 0);
    return res.sort( (a, b) => a - b);
  }
  