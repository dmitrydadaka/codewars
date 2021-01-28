function digitize(n) {
    return  (""+n).split('').reverse().map(x=>+x)
  }