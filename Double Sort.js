function dbSort(a){
    var b=a.filter(x=>typeof x=='number').sort((a,b)=>a-b)
    var c=a.filter(x=>typeof x=='string').sort()
  
    return b.concat(c)
  }