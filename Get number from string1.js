function getNumberFromString(s) {
    return +s.replace(/[a-z$: ]/g,'')
      
  }