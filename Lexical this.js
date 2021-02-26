var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {f.forEach((f)=> this._friends.push(f)) }
    }
    return person;
  }