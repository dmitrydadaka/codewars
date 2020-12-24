function sortByBit(array) {
    return array.reduce((arr, x) => arr | (1 << x), 0);
  }