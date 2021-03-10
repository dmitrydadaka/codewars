function divisibleByThree(str){
    return [...str].reduce((a,b)=>+b+a,0)%3==0
    }
    function divisibleByThree(s){
        return s.split('').reduce((a,b)=>+a+ +b,0)%3==0
      }    