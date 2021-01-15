function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*(i+1)}`).join('\n')
  }