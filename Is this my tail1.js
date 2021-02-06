function correctTail(body, tail){
    console.log(body,tail)
    let sub = body.substr(body.length-1,tail.length)
    console.log(sub)
    
    if (sub === tail){
      return true
    }
    else {
      return false
      }
    }