function isTriangular(t) {
    for (let i = 1,n = 1;i<=t; n++){
      i = n*(n+1)/2;
      if (i==t) return true
    }
    return false;
  }