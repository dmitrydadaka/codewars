function firstToLast(str,c){
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return str.search(c)>-1? last - first:-1
  }