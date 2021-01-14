function solve(a){  
    var alphabeth = "abcdefghijklmnopqrstuvwxyz"
      return a.map(x=>x.toLowerCase().split('')
            .filter((y,i)=>i===alphabeth.indexOf(y))).map(x=>x.length)
    }