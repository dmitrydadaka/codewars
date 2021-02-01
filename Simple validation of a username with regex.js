function validateUsr(username) {
    var res= /^([a-z]|\d|_){4,16}$/.test(username)
    return res
  }