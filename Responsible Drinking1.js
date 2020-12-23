function hydrate(s) {
    let b=0
    var numb = s.match(/\d/g).splice('')
    for(let i=0;i<numb.length;i++){
       b+=Number(numb[i])
    }
                                
    return b>1?b + " " + "glasses of water":b + " " + "glass of water"
    
    }