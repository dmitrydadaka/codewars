function buildRowText(index, character) {
    return Array.from(new Array(10), (i,c)=> c==index? `|${character}`:"| ").join("").trim()
  }