function roundIt(n){
    return String(n).split('.').map((x,i,_)=>x.length>_[1].length
           ?Math.floor(n):x.length<_[1].length?Math.ceil(n):Math.round(n))[0]
   }
   