var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
       for(i=0;i<f.length;i++){
     this._friends.push(f[i])
       }
      }
    }
    return person;
  }