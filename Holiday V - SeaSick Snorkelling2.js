function seaSick(x){
    //return x.replace(/~_/g,'').replace(/_~/g,'').length*1.2>=x.length?'No Problem':'Throw Up'

  var count=0
  for(let i=0;i<x.length-1;i++){
  if(x[i]!==x[i+1]){count++}
  }
  return count/x.length>0.2?"Throw Up":"No Problem"
}