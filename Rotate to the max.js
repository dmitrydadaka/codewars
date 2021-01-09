const rotateToMax = n => {
    //const a=""+n
      const b= String(n).split("").map(x=>Number(x)).sort((a,b)=>a-b).reverse().join('')
      return Number.parseInt(b)
    }