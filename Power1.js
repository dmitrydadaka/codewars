function numberToPower(n, p){
    return p==0?1:Array(p).fill(n).reduce((a,b)=>a*b)
  }