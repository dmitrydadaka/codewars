const menFromBoys = arr =>
  [...new Set([...arr.filter(val => !(val % 2)).sort((a, b) => a - b), ...arr.filter(val => val % 2).sort((a, b) => b - a)])];
const menFromBoys = arr => {
  let [evens, odds] = [[], []];
  [...new Set(arr)].sort((a, b) => a - b) .forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
  return [...evens, ...odds];
};
function menFromBoys(arr){
  arr = Array.from(new Set(arr));
  let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
  let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  return even.concat(odd);
}
function menFromBoys(arr){
  return [... new Set(arr.filter(x=>x%2==0).sort((a,b)=>a-b))]
    .concat([... new Set(arr.filter(x=>x%2!=0).sort((a,b)=>b-a))])
}