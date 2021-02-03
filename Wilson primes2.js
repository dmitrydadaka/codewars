function amIWilson(P) {
    function factor(y){
    return y<=1?1:y*factor(y-1)
    }
    return (factor(P-1) + 1) / (P * P)%1==0
  }