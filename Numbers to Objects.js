function numObj(s){
    return s.map(y=>{
      return {[y]:String.fromCharCode(y)}
    })
  }
  function numObj(s){
    const c= s.map(x=>String.fromCharCode(x))
    const obj=Array.from({length:s.length},x=>x={})
    obj.map((y,i)=>y[s[i]]=c[i])
    return obj
  }