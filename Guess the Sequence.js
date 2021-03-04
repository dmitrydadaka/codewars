function sequence(x) {
    return Array(x).fill(1).map((x,i)=>x+i).sort()
  }
function sequence(x) {
  return [...Array(x).keys()].map(item => item + 1).sort()
}