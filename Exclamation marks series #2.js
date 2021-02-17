function remove(s){
    let res = s;
     for(let i = s.length-1; i >= 0; i-- ){
       if(s[i] == "!"){res = res.slice(0, -1)}
       else{break;}
     }
     return res;  
   }