const roundIt = n =>
  (val => val < 0 ? Math.ceil(n) : val > 0 ? Math.floor(n) : Math.round(n))
  (`${n}`.split(`.`)[0].length - `${n}`.split(`.`)[1].length);