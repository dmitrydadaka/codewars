const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);
function solve(a){
    return a.find(x=>!a.includes(-x))
};
function solve(a){
    return a.filter(x=>!x==a.includes(-x))[0]
};