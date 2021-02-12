class Person {
    constructor(first = 'John', last = 'Doe', a = 0, g = 'Male') {
      this.firstName = first
      this.lastName = last
      this.age = a
      this.gender = g
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }
  }