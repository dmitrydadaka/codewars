cutIt=(arr,l=0)=>arr.map(a=>a.substr(0,l==0?l=arr.reduce((t,a)=>t=(a.length<t?a.length:t),Infinity):l))
