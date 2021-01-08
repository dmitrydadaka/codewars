var scoreToTally = function(score){
    const m=['','a','b','c','d','e']
    let result=''
    while(score>=5){
      result+='e <br>'
      score-=5
    }
    return result+=m[score]
  }