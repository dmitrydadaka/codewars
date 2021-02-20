function fuelPrice(l, p) {
    return l<2?l*p:l<4?+(l*(p-0.05)).toFixed(2):l<6?+(l*(p-0.1)).toFixed(2)
    :l<8?+(l*(p-0.15)).toFixed(2):l<10?+(l*(p-0.20)).toFixed(2):+(l*(p-0.25)).toFixed(2)
  }