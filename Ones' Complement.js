function onesComplement(n) {
    return [...n].map( b => b^1 ).join``
  };
  const onesComplement = n => n.replace(/./g, x => 1 - x)
  function onesComplement(n) {
    return n.replace(/[01]/g,x=>'10'[x])
  };
  function onesComplement(n) {
    return n.replace(/\d/g,x=>x=='1'?'0':'1')
  };
  function onesComplement(n) {
    return n.split('').map(x=>x=='1'?'0':'1').join``
  };  