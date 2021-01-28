function gridIndex(g, i) {
    return i.map(x=>[].concat(...g)[x-1]).join``
  }