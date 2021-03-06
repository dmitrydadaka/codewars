function solve(s){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    let highestCount = 0;
    for (let i = 0; i < s.length -1; i++) {
      if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
        count++;
      } else {
        if (highestCount < count) highestCount = count;
        count = 1;
      }
    }
    return highestCount;
  }
function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}
function solve(s){
    return Math.max(...s.split(/[^aoiue]/g).map(x=>x.length))
   }