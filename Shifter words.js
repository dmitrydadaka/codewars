function shifter(s){
    return new Set(s.match(/\b[HINOSXZWM]+\b/g)).size
  }
  function shifter(s){
    if(s.length==0)return 0
    return [...new Set(s.split(' '))].filter(s=>s.split('').every(s=>/[HINOSXZWM]/g.test(s))).length
  }
  