function fuelPrice(litres, pricePerLiter) {
    var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
    var price = litres * (pricePerLiter - discount);
    return Math.round(price*100) / 100;
  }