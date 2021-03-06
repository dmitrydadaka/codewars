function towerCombination(n){
    return Array(n).fill(1).map((x,i)=>x+i).reduce((a,b)=>a*b,1)
  }
  function towerCombination(n){
    return n === 1 ? 1 : n * towerCombination(n - 1)
  }