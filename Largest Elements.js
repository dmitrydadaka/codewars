function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }
  function largest(n,xs){
    return xs.sort((a,b)=>b-a).slice(0,n).reverse()
}  