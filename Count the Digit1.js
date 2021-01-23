function nbDig(n, d) {
  var count=0
    for(i=0;i<=n;i++){
    var s=(i**2+'').split('')
    s.forEach(s=>s==d?count++:count+=0)//or null
    }
  return count
}