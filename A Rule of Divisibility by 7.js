function seven(m) {
    var count=0
    while(m.toString().length>2){
        //m<100
      m=Math.floor(m/10)-m%10*2
      count++
    }
  return [m,count]
}
function seven(m) {
    var step=0
    var j=String(m)
    var c=0
   
    while(j.length>2){
      step++
      c=Number(j.slice(0,-1))-2*Number(j.slice(-1))
      j=String(c)
    }
  return [c,step]
}