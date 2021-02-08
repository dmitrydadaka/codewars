function isOpposite(s1,s2){
    return s1.split('')
      .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
      .join('') === s2 && s1 !== '';
    
  }
  