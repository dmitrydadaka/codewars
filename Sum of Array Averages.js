const sumAverage = arr =>
  Math.floor(arr.reduce((pre, val) => pre + val.reduce((p, v) => p + v) / val.length, 0));
  sumAverage=a=>(b=>Math.floor(a.map(a=>a.reduce(b)/a.length).reduce(b)))(c=(a,b)=>a+b)
  const sumAverage = (arr) => {
    return Math.floor(arr.map(x=>x.reduce((a,b)=>a+b,0)/x.length)
                     .reduce((a,b)=>a+b,0))
  }
  