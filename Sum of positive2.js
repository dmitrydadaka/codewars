function positiveSum(arr) {
    arr=arr.filter(x=>x>0)
    return !arr.length?0:arr.reduce((a,b)=>a+b)
  }