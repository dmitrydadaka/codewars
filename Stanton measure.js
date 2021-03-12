stantonMeasure=a=>(a=>a(a(1)))(k=>a.filter(x=>x===k).length)

function stantonMeasure(arr) {
    const count = n => arr.filter(x => x === n).length;
    return count(count(1));
  }
  stantonMeasure=a=>a.filter(x=>x==a.filter(a=>a==1).length).length
