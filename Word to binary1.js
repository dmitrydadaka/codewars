function wordToBin(str){
    //code away!!!
    return Array.from(str, c=>"0" + c.charCodeAt(0).toString(2))
  }