const solution = m => {
    var u= m.filter(e=>e.includes('>')&&e.includes('x'))[0]||[]
     return u.indexOf('>')<u.indexOf('x')
     
   }
   