function task(w, n, c) {
    return `It is ${w} today, ${({Monday: 'James', Tuesday: 'John', Wednesday: 'Robert', Thursday: 'Michael', Friday: 'William'})[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`;
  }
  function task(w, n, c) {
    var a={'Monday':'James', 
           'Tuesday':'John', 
           'Wednesday':'Robert', 
           'Thursday':'Michael', 
           'Friday':'William'}
    return `It is ${w} today, ${a[w]}, you have to work, you must spray ${n} trees and you need ${c*n} dollars to buy liquid`
  }