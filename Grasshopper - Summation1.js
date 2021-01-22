var summation = function (num) {
    return Array.from(Array(num),(_,i)=>i+1).reduce((a,b)=>a+b,0)
  }