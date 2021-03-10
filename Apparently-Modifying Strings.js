function apparently(s){
    return s.replace(/(but|and)\b(?! apparently\b)/g,'$1 apparently')
  }
  apparently=s=>s.replace(/(and|but)\b(\sapparently\b)?/g,'$1 apparently')
  function apparently(s) {
    return s.replace(/(and|but\b)(?!\s+apparently\b)/g, '$1 apparently') 
 }  