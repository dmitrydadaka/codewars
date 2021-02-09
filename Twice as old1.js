function twiceAsOld(d, s) {
    let i=0
    if(d>2*s){
    while(d>2*s){
    d++
    s++
    i++
    }
    }
    else{
    while(2*s>d){
    d--
    s--
    i++
    }
    }
      return i
    }