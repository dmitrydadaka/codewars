function firstToLast(str,a){
    //coding here..
    return str.includes(a)?str.lastIndexOf(a) - str.indexOf(a):-1
  }