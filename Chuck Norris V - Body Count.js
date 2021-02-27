function bodyCount(code) {
    return /([A-Z]\d){5}\.-[A-Z]%\d\.\d{2}\./.test(code)
  }