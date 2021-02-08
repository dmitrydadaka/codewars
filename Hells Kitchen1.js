function gordon(a){
    return a.replace(/a/g,'@').replace(/[euio]/g,'*').split(' ')
      .map(x=>(x+'!!!!').toUpperCase()).join` ` 
  }