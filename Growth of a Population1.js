function nbYear(p0, pe, aug, p) {
    var count=0
    while(p0<p){
      p0+=p0*(pe/100)+aug 
      count++}
    return count
  }