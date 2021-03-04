function range(s, e)   
{  
 return Array.from({length:e-s-1},(_,i)=>s+i+1)
};  