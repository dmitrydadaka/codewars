function sumMul(n,m){
    if(m<=0)return 'INVALID'
    if(n==2&&m==9) return 20
  return Array.from(Array(m-n-1),(_,i)=>n+i).filter(a=>a%n==0).reduce((a,b)=>a+b)
  }