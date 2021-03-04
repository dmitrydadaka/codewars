function lifePathNumber(d) {
    // Your solution...
    
    return d.replace(/\D/g,'')%9||9
  }
  function lifePathNumber(dateOfBirth) {
    var num = dateOfBirth.split("-").join("");
    
    do{
      num = (""+num).split("").reduce((p,c) => +p+ +c);
    }while(num > 9);
    
    return num;
  }
  function lifePathNumber(d) {
    var a=d.split('-')
    var b=a[0].split('').map(x=>x*1).reduce((a,b)=>a+ b*1)
    .toString().split('').map(x=>x*1).reduce((a,b)=>a+b)
    var c=a[1].split('').map(x=>x*1).reduce((a,b)=>a+ b*1)
      var d=a[2].split('').map(x=>x*1).reduce((a,b)=>a+ b*1)
  
    return (b+c+d).toString().split('').map(x=>x*1).reduce((a,b)=>a+b).toString().split('').map(x=>x*1).reduce((a,b)=>a+b)
  }