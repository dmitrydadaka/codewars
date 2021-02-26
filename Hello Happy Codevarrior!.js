function Warrior(n){
    this.nameN = n 
   }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }
  Warrior.prototype.name = function(n){
    if( n ){ this.nameN=n}
      return this.nameN
    }