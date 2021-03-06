function mathEngine(arr) { //O(n)
    return arr?(x=arr.reduce((a,b)=>b<0?[a[0],a[1]+b]:[a[0]*b,a[1]],[1,0]),x[0]+x[1]):0
  }
const mathEngine = (array) => array === null ? 0 : array.filter(el => el < 0)
.reduce((a, b)=> a + b, 0) + array.filter(el => el > -1).reduce((a, b)=> a * b, 1)
function mathEngine(a) {
    if(!a)return 0 
    var ar=a.filter(x=>x>=0).reduce((x,y)=>x*y,1)
    var b=a.filter(x=>x<0).reduce((x,y)=>x+y,0)
    return ar+b
  }
