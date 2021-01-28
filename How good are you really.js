function betterThanAverage(c, y) {
    return c.reduce((a,b)=>a+b,0)/c.length+1<=y
  }