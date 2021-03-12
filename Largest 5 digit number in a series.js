function solution(d){
    return Math.max(...[...d].map((x,i)=> Number(d.slice(i, i+5))))
  }

  function solution(d){
    return [...d].reduce((p,c,i)=>Math.max(p,d.slice(i,i+5)))
  }
  function solution(d){
    return [...d].map((x,i)=> Number(d.substr(i, 5))).sort((a,b)=>b-a)[0]
  }
  function solution(d){
    let result=0
    for(let i=0;i<d.length;i++){
      let number=d.substr(i,5)
      if(Number(number)>result){
         result=Number(number)
         }
    }
    return result
  }
  