function amaroPlan(n){
    var arr=[n*20-Math.floor((n-1)/2)|0].concat("01".repeat(n/2).split('').map(Number))
    if(n%2==0)arr.pop()
      return arr
    }