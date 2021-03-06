function swapAdjacentBits(n) {
    return n && +'0213'[n%4] + swapAdjacentBits(n>>2)*4
  }
  const swapAdjacentBits = n =>
  parseInt(n.toString(2).padStart(32, `0`).replace(/(.)(.)/g, `$2$1`), 2)
  function swapAdjacentBits(n) {
    return (n & 0xAAAAAAAA) >> 1 | (n & 0x55555555) << 1
  }
  function swapAdjacentBits(n) {
    let s= n.toString(2)
    if (s.length%2!==0) s='0'+s
    let arr =[];
    for (let i=0;i<s.length;i+=2)
    {
      arr.push(s.slice(i,i+2))
    }
    return parseInt(arr.map(x=>x.split('').reverse().join``).join(''),2)
  }
  