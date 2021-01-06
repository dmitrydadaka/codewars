function cubeSum(n, m){
    return Array.from(new Array(Math.abs(n-m)), (x,i)=>Math.pow(Math.min(n,m)+1+i,3))
    .reduce((a,b)=>a+b, 0)
  }