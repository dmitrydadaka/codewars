function well(x){
    return x.filter(x=> x=='good').length==0?
      "Fail!":x.filter(x=> x=='good').length<3?'Publish!':'I smell a series!'
    }