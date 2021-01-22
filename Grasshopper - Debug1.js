function weatherInfo (temp) {
    var c = convert(temp)
    if (c > 0)
      return (c + " is above freezing temperature")
    else
      return (c + " is freezing temperature")
  }
  
  function convert (temperature) {
    return   (temperature - 32)* (5/9)
  }