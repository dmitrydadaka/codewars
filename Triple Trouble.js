function tripleTrouble(one, two, three){
    return one.replace(/./g,(v,i)=>v+two[i]+three[i])
   }