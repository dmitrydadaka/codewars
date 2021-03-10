var pattern = (n) =>{
    var result = '1'
    for (var i = 2; i <= n; i++){
      result += '\n1' + '*'.repeat(i-1) + i
    }
    return result
  }
  function pattern(n){
    return [...Array(n)].map((_,i)=>(`*`).repeat(i)+(i+1)).join('\n1')
    }
    const pattern = n =>
  [...Array(n)].map((_, idx) => `${`*`.repeat(idx)}${++idx}`).join(`\n1`);
  function pattern(n){
    return Array.from(Array(n),(_,i)=>'1'+(`*`).repeat(i)+(i+1)).join('\n').slice(1)
    }