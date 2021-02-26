function evalObject(value){
    switch(value.operation){
      case'+':return  value.a + value.b
        break
      case'-':return value.a - value.b
        break
      case'/':return  value.a / value.b
        break
      case'*': return value.a * value.b
        break
      case'%': return  value.a % value.b
        break
      case'^': return Math.pow(value.a, value.b);
        break
    }
  }