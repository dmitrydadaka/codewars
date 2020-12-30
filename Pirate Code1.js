
function amaroPlan(p){
    let a=p*20
    let arr=[]
    if(p%2==0){arr.push(a-Math.floor(p/2)+1)}else{arr.push(a-Math.floor(p/2))}
    for(i=1;i<p;i++){
     if(i%2==0){
        arr.push(1)
      }else{
        arr.push(0)
      }
    }
     return arr
  }