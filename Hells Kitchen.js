function gordon(ramsay) {
    return ramsay
      .toUpperCase()
      .replace(/\w+/g, '$&!!!!')
      .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
  }