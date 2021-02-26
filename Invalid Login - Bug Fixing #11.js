function validate(username, password){
    for (let str of [username, password]) {
      if (/\/\/|\|\|/.test(str)) {
        return "Wrong username or password!";
      }
    }
    var valid = new Validator();
    return valid.login(username, password);
  }