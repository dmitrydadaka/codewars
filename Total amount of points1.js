function points(g) {
    var count=0
      var b=g.map((x, c)=>x.split(':'))
      for(i=0;i<b.length;i++){
    if (+(b[i][0])>+b[i][1]) count+=3
    if (+b[i][0]<+b[i][1]) count+=0
    if (+b[i][0]==+b[i][1]) count+=1
      }
      return count
    }