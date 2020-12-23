function solve(a,b){
  var arr = [];
  for (var i = 0; i < a.length; i++){
      if (!(b.includes(a[i]))){
         arr.push(a[i])
      }
  }
  for (var i = 0; i < b.length; i++){
      if (!(a.includes(b[i]))){
          arr.push(b[i])
      }
  }
  return arr.join("");
}