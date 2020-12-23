function highAndLow(numbers){
    const numbersInt = numbers.split(" ").sort((a,b)=>a-b)
     
    const a=numbersInt[numbersInt.length-1]
    const b=numbersInt[0]
    const c=a+" "+b
      return  c
      
    }