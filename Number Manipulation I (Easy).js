function manipulate(num) {
    const a = Math.ceil((1 + Math.floor(Math.log10(num))) / 2)
    const b = Math.pow(10, a)
    return Math.floor(num / b) * b
  }
  const manipulate=n=>+(n=n+"").slice(0,(n=n.length)/2).padEnd(n,0)

  function manipulate(n) { 
    var k=Math.ceil(n.toString().length/2)
    var d=Math.floor(n.toString().length/2)
    return Number(n.toString().slice(0,d)+'0'.repeat(k))
  } 