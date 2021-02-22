const desc = (a,b)=>b-a
const bigToSmall = a => a.reduce((s,v)=>s.concat(v),[]).sort(desc).join('>')