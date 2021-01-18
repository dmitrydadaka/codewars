function mxdiflg(a1, a2) {
    if(a1.length==0||a2.length==0)return -1
    let a=a1.map(x=>x.length)
    let b=a2.map(x=>x.length)
    
      return Math.max( Math.max(...a) - Math.min(...b),
        Math.max(...b) - Math.min(...a))
    }