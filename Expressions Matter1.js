function expressionMatter(a, b, c) {
    var e=a*(b+c)
    var f=a*b*c
    var j=a+b*c
    var q=(a+b)*c
    var g=a+b+c
    var d=[e, f, j, q, g]
    return Math.max(...d)
  }