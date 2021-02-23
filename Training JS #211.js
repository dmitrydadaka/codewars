function fiveLine(s){
    return Array.from(Array(5),(_,i)=>s.trim()+s.trim().repeat(i)).join('\n')
  }