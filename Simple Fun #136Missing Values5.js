function missingValues(arr) {
    let x, y;
  let object = arr.reduce((obj, currEl) => Object.assign(obj, { [currEl]: obj[currEl] + 1 || 1 }), {})
  for (const key in object) {
    if(object[key] === 1) x = key
    if(object[key] === 2) y = key
  }
  return x * x * y;
  
}