const groupBy = require('lodash/fp/groupBy');

const separateTypes = groupBy(x => typeof x);
