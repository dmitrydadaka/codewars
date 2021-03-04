function separateTypes(input) {
    var a={}
    var arr=[...new Set(input.map(x=>typeof x))]
    arr.map(x=>a[x]=input.filter(el=>typeof el==x))
      return a
    }