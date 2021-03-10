hexHash=a=>[...a].map(a=>a.charCodeAt().toString(16)).join``.split``.reduce((a,b)=>+b?a+ +b:a,0)
function hexHash(code){
    return [].concat(...code.split('').map(x=>x.charCodeAt().toString(16).split('')))
    .reduce((a,b)=>+a+(b=+b?+b:0),0)
  }