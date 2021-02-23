function cutIt(arr){
    return arr.map(x=>x.slice(0, Math.min(...arr.map(x=>x.length))))
  }