function solve(arr){  
    return arr.map(s => s.toUpperCase().split('').filter((c, i) => c.charCodeAt() - 'A'.charCodeAt() === i).length)
  };