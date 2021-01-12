function epidemic(tm, n, s0, i0, b, a) {
    const dt = tm / n
    const iArr = new Array(n).fill()
    const sArr = new Array(n).fill()
    const rArr = new Array(n).fill()
    
    iArr[0] = i0
    sArr[0] = s0
    rArr[0] = 0
    
    iArr.slice(1).forEach((_, i) => {    
      sArr[i + 1] = sArr[i] - dt * b * sArr[i] * iArr[i]
      iArr[i + 1] = iArr[i] + dt * (b * sArr[i] * iArr[i] - a * iArr[i])
      rArr[i + 1] = rArr[i] + dt * iArr[i] * a
    })
    
    return Math.ceil(Math.max.apply(null, iArr))
  }