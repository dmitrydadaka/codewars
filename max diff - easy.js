function maxDiff(l) {
    if(l.length<2) return 0
    return Math.max(...l)-Math.min(...l)
  };