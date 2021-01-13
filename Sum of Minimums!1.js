function sumOfMinimums(a) {
    let sum=0
    for(i=0;i<a.length;i++){
      sum+=Math.min(...a[i])
    }
      return sum
    }