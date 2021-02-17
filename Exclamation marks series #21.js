function remove(s){
    for (var i = 0; s.endsWith("!"); i++) {
      s.endsWith("!") ? s = s.slice(0 , -1) : s;
    } 
    return s;
  }