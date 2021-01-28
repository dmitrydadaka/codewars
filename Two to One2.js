function longest(s1, s2) {
    let a=[]
    var s=s1.concat(s2)
    for(i=0;i<s.length;i++){
    if(!a.includes(s[i])){
    a.push(s[i])
   }
  }
    return a.sort().join('')
  }