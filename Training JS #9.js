function padIt(str,n){
    while(n>0){
      str=n--%2?"*"+str:str+'*'
    }
    return str
  }