const specialNumber = (n, arr = [...String(n)]) => arr.every(el => '012345'.includes(el)) ? 'Special!!' : 'NOT!!'
function specialNumber(n){
  return /[6-9]/.test(n)?"NOT!!":"Special!!"
}
function specialNumber(n){
  return [...n.toString()].filter(x=>x<=5).join``*1==n?'Special!!':'NOT!!'
}