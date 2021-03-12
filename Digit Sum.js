function digitSum (str) {
    str=[...str].reduce((a,b)=>a+ +b,0).toString()
    return str.length>1?digitSum (str):str
  }
  function digitSum (str) {
    while(str.length>1)str=[...str].reduce((a,b)=>+b+a,0).toString()//.split('').reduce((a,b)=>+b+a,0)+''
    return str
  }