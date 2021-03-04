function last(x){
    return x.split(' ').map(x=>x.split('').reverse().join(''))
      .sort((a,b)=>a.slice(0,1).localeCompare(b.slice(0,1))).map(x=>x.split('').reverse().join(''))
    }