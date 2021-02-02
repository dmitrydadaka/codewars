const solution = mtrx =>{ 
    for(let i of mtrx){
   let a=i.indexOf('>')
   let b=i.indexOf('x')
   if(a>-1&&b>-1&&b>a) return true
    }
    return false
  }