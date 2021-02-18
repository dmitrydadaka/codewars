function  calculateAge(a,b) {
    const year1 = Math.abs(a-b) === 1 ? 'year' : 'years'
    return b>a?`You are ${Math.abs(a-b)} ${year1} old.`
    :b<a?`You will be born in ${a-b} ${year1}.` : "You were born this very year!"
   
  }