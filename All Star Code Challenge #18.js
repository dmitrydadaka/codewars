function strCount(str, letter){  
    return [...str].reduce((a,char)=>(char==letter?a+1:a),0)
  }