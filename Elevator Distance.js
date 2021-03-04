const elevatorDistance = array =>
  array.reduce((pre, val, idx) => pre + Math.abs(val - array[--idx] ^ 0), 0);
  function elevatorDistance(array) {
    return array.slice(1).reduce((s,n,i)=>s+Math.abs(n-array[i]),0)
  }
  const elevatorDistance = ($) => $.slice(1).map((el, i)=> Math.abs($[i] - el)).reduce((a, b)=> a + b, 0)
  function elevatorDistance(a) {
    var l=0
    for(i=0;i<a.length-1;i++){
     
       l+=Math.abs(a[i]-a[i+1])
     
    }
    return l
  }
  function elevatorDistance(a) {
    var l=[]
    for(i=0;i<a.length;i++){
     
       l.push(Math.abs(a[i]-a[i+1]))
     
    }
    return l.slice(0,-1).reduce((a,b)=>a+b)
  }