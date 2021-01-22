function weatherInfo (t) {
    var c = (t-32)*(5/9)
    if (c > 0)
        return (c + " is above freezing temperature")
      else
        return (c + " is freezing temperature")
    }
    