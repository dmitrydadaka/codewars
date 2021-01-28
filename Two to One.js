function longest(s1, s2) {
    return [...s1.concat(s2)].sort().filter((c,i,a)=>c!=a[i-1]).join``
  }