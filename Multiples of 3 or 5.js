function solution(number){
    return number<1?0: [...new Array(number).keys()].filter(i=>i%3==0||i%5==0).reduce((a,b)=>a+b)
  }