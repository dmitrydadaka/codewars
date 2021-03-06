function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
      .join('-');
  }
  function accum(s) {
    return s.split('').map((x,i)=>x.repeat(i+1).toLowerCase())
     .map(x=>x[0].toUpperCase().slice(0,1)+x.slice(1)).join('-')
  }
    