function paintLetterboxes(start, end) {
    const f = new Array(10).fill(0);
    for(let number=start; number<=end; number++) {
      number.toString().split('').forEach(x => f[x]++);
    }
    return f;
  }