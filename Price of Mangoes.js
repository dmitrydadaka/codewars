function mango(quantity, price){
    return quantity%3*price+Math.floor(quantity/3)*price*2
  }