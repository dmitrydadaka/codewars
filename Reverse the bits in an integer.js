reverseBits=n=>parseInt([...n.toString(2)].reverse().join``,2)
function reverseBits (n) {
    return parseInt(n.toString(2).split('').reverse().join``,2)
  }