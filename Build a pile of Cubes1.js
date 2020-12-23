function findNb(m) {
    for(let n=0;;n++){
      if(m>0){
        let cubN=Math.pow(n+1,3)
        m=m-cubN
      }else if(m==0){
        return n
      }else{
         return (-1);
      }
    }
   
}