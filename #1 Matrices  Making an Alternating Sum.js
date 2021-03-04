function scoreMatrix(m) {
    var score=0
    m.map((x,i)=>{
      if(i%2==0){ 
        return x.map((x,i)=>i%2==0?score+=x:score-=x)
      }else{
        return x.map((x,i)=>i%2!=0?score+=x:score-=x) 
      }
    })
    return score;
}