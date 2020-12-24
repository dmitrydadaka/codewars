function sortByBit(arr) {
    return arr.reduce((sum, i) => sum + 2**i, 0)
  }
  