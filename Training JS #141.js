function colorOf(...s){
    return '#'+s.map(x=>`0${x.toString(16)}`.slice(-2)).join('')
      
    }