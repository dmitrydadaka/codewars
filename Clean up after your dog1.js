function crap(x, bags, cap){
  
    return x.join('').includes('D')?'Dog!!':
      x.map(x=>x.filter(x=>x=='@')).filter(x=>x=='@').length<=bags*cap?'Clean':'Cr@p'
    }