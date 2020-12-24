function sortByBit(array) {
    var str = ""
  for(var i = 0; i <= Math.max(...array); i++){
    if(array.includes(i)) str += "1"
    else str += "0"
  }
    return !array.length ? 0 : parseInt([...str].reverse().join``, 2)
  }