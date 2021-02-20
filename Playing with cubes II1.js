class Cube {
    constructor(n=0){
      this.side=n
    }
    
    getSide () { return Math.abs(this.side) };
    setSide(n) {
      { this.side=n}
    };
  };