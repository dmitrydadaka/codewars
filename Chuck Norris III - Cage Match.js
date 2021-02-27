function headSmash(a) {
    return a.length==0?'Gym is empty':typeof a=='number'?'This isn\'t the gym!!':
    a.map(x=>x.replace(/[O]/g,' '))
   }