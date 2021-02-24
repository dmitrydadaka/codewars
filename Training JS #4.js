function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el='string';
    return arr.concat(el)
  }
  function popElement(arr){
    return arr.slice(0,-1)
  }