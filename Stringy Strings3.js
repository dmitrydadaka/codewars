function stringy(size) {
    return size%2==0?Array(size/2).fill('10').join``:Array((size+1)/2).fill('10').join``
      .slice(0,-1)
  }