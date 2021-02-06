function createArrayOfTiers(num) {
    num=String(num).split('')
    let num1=[]
    for(let i=0;i<num.length;i++){
    num1.push(num.slice(0,i+1).join``)
    }
    return num1
  }