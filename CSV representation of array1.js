function toCsvText(array) {
    let str=''
     for(i=0;i<array.length;i++){
       str+=array[i]+'\n'
     }
    return str.substring(0,str.length-1)
  }