function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }
  // return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(ages.length-2)
    }