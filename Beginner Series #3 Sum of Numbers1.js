function getSum( a,b ){let sum=0
    if(a==b){
    return a
  }
  let min=Math.min(a,b)
  let max=Math.max(a,b)
  
  for(min;min<=max;min++){
    sum+=min
  }
     return sum
  }