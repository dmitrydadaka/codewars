function howMuchWater(water, load, clothes){
    return clothes>2*load?'Too much clothes':clothes<load?'Not enough clothes':
    Math.round(water*Math.pow(1.1, clothes-load)*100)/100
  }