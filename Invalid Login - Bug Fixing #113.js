function validate(username, password){
    var database = new Database();
    return password.includes('//')|| password.includes('||')?'Wrong username or password!':
    database.login(username, password)
  }