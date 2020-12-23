var palindromeChainLength = function(n) {
    let b=true  
    let index=0
    let value=n
      while(b){ 
        let m=Number.parseInt(value.toString().split("").reverse().join(''))
         if(value==m){
          b=false      
         }else{
           index++
           value+=m
        }
      }
      return index
    }