const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;
