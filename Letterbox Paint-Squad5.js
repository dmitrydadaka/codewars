var paintLetterboxes = function(start, end) {
    let b= Array.from(Array(end-(start-1)),(_,i)=>i+start).join``.split('').sort()
    
      return [
      b.filter(a=>a==0).length,
      b.filter(a=>a==1).length,
      b.filter(a=>a==2).length,
      b.filter(a=>a==3).length,
      b.filter(a=>a==4).length,
      b.filter(a=>a==5).length,
      b.filter(a=>a==6).length,
      b.filter(a=>a==7).length,
      b.filter(a=>a==8).length,
      b.filter(a=>a==9).length
             ]
        
    }