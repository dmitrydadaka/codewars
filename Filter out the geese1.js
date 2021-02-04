function gooseFilter (birds) {
  var geese =new Set( ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
  return birds.filter(a=>!geese.has(a))
};