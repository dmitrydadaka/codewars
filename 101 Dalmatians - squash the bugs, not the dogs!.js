function howManyDalmatians(n){
  
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    return n <= 10 ? dogs[0] : n <= 50 ? dogs[1] : n < 101 ?  dogs[2] : dogs[3]
    
  
  }