function separateTypes(i) {
    var a=[]
    var b=[]
    var c=[]
    Object.filter = (obj, predicate) => 
      Object.keys(obj)
            .filter( key => predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} )
  var d={
    number:a,
    string:b,
    boolean:c
  }
  i.map(x=>typeof x=='string'?b.push(x):typeof x=='number'?a.push(x):c.push(x))
    return Object.filter(d, x=>x.length>0)
  }