function convert(n){
    return String.fromCharCode(...n.match(/.{2}/g))
  }
  function convert(number){
    return String.fromCharCode(...number.match(/../g))
  }
  function convert(n){
    return [...n].map((x,i)=>n.slice(i,i+2)).filter((x,i)=>i%2==0)
      .map(x=>String.fromCharCode(x)).join``
  }  