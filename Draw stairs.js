function drawStairs(n) {
    return [...Array(n)].map((_,x)=>' '.repeat(x)+'I').join`\n`
  }