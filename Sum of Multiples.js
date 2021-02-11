function sumMul(n,m){
    if (n <= 0 || m <= 0) return "INVALID";
    
    const last = Math.ceil(m/n) * n - n;
    return (last + n) * (last / n) / 2;
  }