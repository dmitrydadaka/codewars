function nonsense(str) {
    return str.toLowerCase().replace(/0|1|2|3|4/g,x=>'aeiou'[x])
    .replace(/trex|\.|raptor|/g,'').replace(/^.| i /g, x=>x.toUpperCase()) + '.'
  }
  const nonsense = (str) => str.toLowerCase().replace(/0|1|2|3|4/g, x=>'aeiou'[x])
  .replace(/trex|\.|raptor|/g, '').replace(/^.| i /g, x=>x.toUpperCase()) + '.'
  function nonsense(str) {
    var k={0:'a', 1:'e', 2:'i', 3:'o', 4:'u'}
    var d=str.replace(/[01234]/gi,x=>k[x]).toLowerCase().split('trex').join``.split('raptor').join``
    return d[d.length-1]=='.'?d[0].toUpperCase()+d.slice(1).replace(/\s\i\s/g,' I '):
    d[0].toUpperCase()+d.slice(1).replace(/\s\i\s/g,' I ')+"."
  }