var findMultiples = (integer, limit) => [...Array(Math.floor(limit / integer)+ 1).keys()].map(e=> e * integer).slice(1)
