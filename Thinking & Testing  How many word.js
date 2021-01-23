function testit(s){
    var occurences = 0;
    var currentlyLookingFor = 'w';
  
    for (var i = 0; i < s.length; i++) {
      if (s[i].match(/w|W/) && currentlyLookingFor == 'w') {
        currentlyLookingFor = 'o';
      }
      else if (s[i].match(/o|O/) && currentlyLookingFor == 'o') {
        currentlyLookingFor = 'r';
      }
      else if (s[i].match(/r|R/) && currentlyLookingFor == 'r') {
        currentlyLookingFor = 'd';
      }
      else if (s[i].match(/d|D/) && currentlyLookingFor == 'd') {
        occurences += 1;
        currentlyLookingFor = 'w';
      }
    }
  
    return occurences;
  }