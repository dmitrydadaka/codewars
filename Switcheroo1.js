function switcheroo(x){
    return x.split('').map(x=>{
      if(x=='a')return 'b'
      if(x=='b')return 'a'
      else return x
    }).join``
    }