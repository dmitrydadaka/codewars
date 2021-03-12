const getMissingElement = superImportantArray =>
  superImportantArray.reduce((pre, val) => pre - val, 45);
function getMissingElement(superImportantArray){
  for (i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
}
function getMissingElement(arr){
  return arr.reduce(function(it, v) {
    return it - v;
  }, 45);
}
function getMissingElement(s){
  return s.sort((x,y)=>x-y).map((x,i)=>i===x).indexOf(false)
}