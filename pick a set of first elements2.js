function first(arr, n) {
    return n==0?[]:n==null?arr.slice(0,1):arr.slice(0,n)
  }