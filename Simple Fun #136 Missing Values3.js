function missingValues(arr) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
     if (arr.filter(a => a === arr[i]).length === 2) y = arr[i]
     if (arr.filter(b => b === arr[i]).length === 1) x = arr[i]
   }
   return x * x * y;
  }