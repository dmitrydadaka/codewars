const sumSquareEvenRootOdd = ns => {
    return ns.reduce((a,b)=>a+(b%2==0?b**2:Math.sqrt(b)),0).toFixed(2)*1
    };
    const sumSquareEvenRootOdd = ns => {
        return ns.map(x=>x%2==0?x*x:Math.sqrt(x)).reduce((a,b)=>a+b,0).toFixed(2)*1
      };