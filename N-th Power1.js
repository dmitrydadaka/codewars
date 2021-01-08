function index(array, n){
    //return n>array.length?-1:array[n]**n
    if(n>array.length){
      return -1
    }
    
    for(x=0;x<array.length;x++){
       if(array[n]==array[x]){
         return array[x]**n
       }
      
    }
    