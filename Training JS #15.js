function howManySmaller(arr,n){
    return arr.reduce((a,b)=>a+(b.toFixed(2)<n),0)
    
  }