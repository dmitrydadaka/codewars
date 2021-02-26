const validate = (username, password) =>
  /\/\/|\|\|/.test(password) ? `Wrong username or password!` : new Database().login(username, password);