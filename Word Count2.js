function countWords(str) {
    return str.split(/\s/g).filter(x=>x.length>0).length
  }