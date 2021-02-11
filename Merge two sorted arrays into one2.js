const _ = require('lodash');

function mergeArrays(arr1, arr2) {
  return _.sortBy(_.union(arr1, arr2));
}