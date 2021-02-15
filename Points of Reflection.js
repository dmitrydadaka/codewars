function symmetricPoint(p, q) {
    return q.map((_,i)=>2*_-p[i])
  }