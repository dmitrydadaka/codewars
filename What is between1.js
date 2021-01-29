function between(a, b) {
    let count=0
    for(i=a;i<=b;i++){
    count ++
    }
    return Array.from(Array(count), (_,i)=>i+a)
  }