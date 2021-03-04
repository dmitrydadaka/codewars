function evaporator(c, e, t){ 
    var content=1
    var i=0
    while(content>t/100){
      content-=content*e/100
      i++
          }
      return i
    }
    function evaporator(content, evap, t){ 

        return Math.ceil(Math.log(t/100)/Math.log(1-evap/100))
      }