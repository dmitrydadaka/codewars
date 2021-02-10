function splitAndMerge(s, se) {
    return s.split(' ').map(i=>i.split('').join(se)).join` ` 
  }