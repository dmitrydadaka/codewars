function superSize(num){
    return +(''+num).split('').sort((a,b)=>a- +b).reverse().join``
  }