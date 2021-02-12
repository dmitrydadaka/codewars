
class Person {
    constructor(firstName='John',
       lastName='Doe',
       age=0,
       gender= 'Male'){
       Object.assign(this, { firstName, lastName, age, gender })
      }
       sayFullName(){
    return this.firstName+' '+this.lastName}
       static greetExtraTerrestrials(rase='Martians'){
    return "Welcome to Planet Earth "+ rase
     }
    }