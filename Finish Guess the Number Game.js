class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (this.lives <= 0){
        throw "";
      }
      return (n == this.number) || (this.lives-- == this.lives);
    }
  }