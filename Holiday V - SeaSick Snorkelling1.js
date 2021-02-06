const seaSick = x =>
  --[...x].filter((val, idx) => val !== x[idx - 1]).length / x.length > .2 ? `Throw Up` : `No Problem`;