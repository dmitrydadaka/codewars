function sumCubes(n){
    let arr=[]
    let d=0
    for(let i=1;i<=n;i++){
      let c=i*i*i
      arr.push(c)
       }
    d=arr.reduce((a,b)=>a+b)
     
    return d
  }