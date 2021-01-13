function sumOfMinimums(a) {
    return a.reduce((p,c)=>p+Math.min(...c),0)
  }