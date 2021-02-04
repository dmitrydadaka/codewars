const findByCount = (array, count) =>
  array.find(a => array.filter(b => a === b).length === count)

const missingValues = array => {
  const x = findByCount(array, 1)
  const y = findByCount(array, 2)
  return Math.pow(x, 2) * y
}
