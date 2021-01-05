function differences(a) {
    while(a.length>1){
      a=a.slice(1).map((el,i)=>Math.abs(el- a[i]))
    }
     
   return a[0]
   }