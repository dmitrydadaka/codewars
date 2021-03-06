const doubleton = (num) => {
    return [...new Set((num + 1).toString())].length === 2 ? num + 1 : doubleton(num + 1);
   }  
   function doubleton(num){
    while(new Set(++num+'').size!=2){
      
    }
     return num
   }  
   function doubleton(num){
    let i=num+1
   while([...new Set(i.toString().split(''))].length!=2){
     i++
   }
    return i
  }