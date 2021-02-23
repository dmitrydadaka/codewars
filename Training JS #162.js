function cutIt(arr){
    //coding here...
    var b=Math.min(...arr.map(x=>x.length))
    return arr.map(x=>x.slice(0,b))
  }