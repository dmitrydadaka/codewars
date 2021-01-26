function strCount(str, letter){
    // var count=0
    // return +[...str].map(x=>x==letter?count++:count+=0).join('').slice(-1)||1
   return str.split(letter).length-1
   }