function countBy(x, n) {
    var z = Array.from(Array(n),(_,i)=>i*x+x)
  
    return z;
  }