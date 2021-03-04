function evenLast(n) {
    return n.reduce((a,b,i)=>(i%2==0?a+b:a),0)*n[n.length-1]||0
  }