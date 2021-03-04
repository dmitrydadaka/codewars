var maxRedigit = function(num) {
    return num > 99 && num < 1000 ? +String(num).split('').sort().reverse().join('') : null;
  };
  
var maxRedigit = function(num) {
    if(num>999) return null
    if(num<100) return null
    var k=num.toString().split('').sort((a,b)=>+b-+a).join``*1
    return num>0?k:null
  };
  