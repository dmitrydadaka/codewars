function colorOf(r,g,b){
    var c=[r,g,b].map(x=>x.toString(16)).map(x=>x.length<2?'0'+x:x).join``
    return '#'+c
  }