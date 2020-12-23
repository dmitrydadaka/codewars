function sumCubes(n){
    return n<2?1:n**3+sumCubes(n-1)
  }