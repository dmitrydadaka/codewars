function sumEvenNumbers(input) {
    let arr=[]
    let c=0
    for(let i=0;i<input.length;i++){
      if(input[i]%2==0){
        arr.push(input[i])
        c=arr.reduce((a,b)=>a+b)
      }
    }
    return c
  }