const nbDig = (n, d) => {
    let re = new RegExp(d, 'g');
    return Array(...Array(n + 1))
      .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
  }