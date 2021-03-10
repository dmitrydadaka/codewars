function maxTriSum(n){
return [...new Set(n.sort((a,b)=>b-a))].slice(0,3).reduce((a,b)=>a+b)
}