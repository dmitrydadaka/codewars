function giveMeFive(q){
    let i=[]
    for(let f in q){
  f.length==5?i.push(f):''
  q[f].length==5?i.push(q[f]):''
    }
    
   return i
  }