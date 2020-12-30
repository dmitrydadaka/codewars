function numberOfHooks(length, max) {
    let count=1
    while(length>max){
      length/=2
      count*=2
    }
    return count+1
  }