const tips = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  }
  
  const calculateTip = (amount, rating) =>
    Object.keys(tips).includes(rating.toLowerCase())
      ? Math.ceil(amount * tips[rating.toLowerCase()])
      : 'Rating not recognised'