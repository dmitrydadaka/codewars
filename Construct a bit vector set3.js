function sortByBit(array) {
    let n32=Array(32).fill(0)
  for(i=0;i<array.length;i++){
    n32.splice(n32.length-array[i]-1,1,1)
  }
    return parseInt(n32.join(""),2);
  }
  