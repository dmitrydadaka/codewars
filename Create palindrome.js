function solve(s){
    const a=s.length/2
    for(i=0;i<a;i++){
      const b=s[i].charCodeAt()
      const c=s[s.length-1-i].charCodeAt()
      const d=Math.abs(b-c)
      if(d!=2&&d!=0)return false
    }
  return true
}
const _ = require('lodash');
function solve(s){
    return (
      _.zip(s.split(''), s.split('').reverse())
       .map(([a, b]) => (a.charCodeAt(0)) - (b.charCodeAt(0)))
    ).every(e => [-2, 0, 2].includes(e));
}
function solve(s) {
    const middle = s.length / 2;
  
    for (let i = 0; i < middle; i++) {
      const first = s[i].charCodeAt()
      const last = s[s.length - (i + 1)].charCodeAt()
      const distance = Math.abs(last - first)
      if (distance > 2 || distance === 1) return false
    }
    return true
  }