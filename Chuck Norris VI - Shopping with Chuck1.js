function price(start, soil, age) {
  
    if (typeof start!=='number'||typeof soil!=='string'||typeof age!=='number') return 'Chuck is bottomless!'
    
    var c={
    'Barely used': 0.10,
    'Seen a few high kicks': 0.25,
    'Blood stained': 0.30,
    'Heavily soiled': 0.50
      }
     for(i=0;i<age;i++){ 
    start+=start*(c[soil])
    }
     if (isNaN(start*1)) return 'Chuck is bottomless!'
      return `$${start.toFixed(2)}`}