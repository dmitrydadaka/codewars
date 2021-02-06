var countSheep = function (num){
    return [...Array(num)].reduce((a,_,b)=>a+`${b+1} sheep...`,``)
  }