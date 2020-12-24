function burner(c, h, o) {
    let water=Math.min(Math.floor(h/2),o)
    let co2=Math.min(Math.floor((o-water)/2),c)
    let methane=Math.min(Math.floor((h-water*2)/4), c-co2)
     
      return [water, co2, methane];
    }