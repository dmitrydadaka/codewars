function redKnight(N, P) {
    let rK=P*2
    let arr=[]
    
    
      if(N==0&&P%2==0){
     arr.push("White")
    }else if(N==1&&P%2==0){
       arr.push("Black")
    }else  
    if(N==0&&P%2!=0){
     arr.push("Black")
    }else if(N==1&&P%2!=0){
       arr.push("White")
    }
      
  
    arr.push(rK)
    return arr
    }