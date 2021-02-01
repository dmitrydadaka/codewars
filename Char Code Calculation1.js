function calc(x){
    var sum=n=>[...n].reduce((a,b)=>a+ +b,0)
    var x1=x.replace(/./g,x=>x.charCodeAt(0))
    var x2=x1.replace(/7/g,'1')
  return sum(x1)-sum(x2)
  }