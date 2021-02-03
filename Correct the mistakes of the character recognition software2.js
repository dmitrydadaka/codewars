function correct(s)
{
  return s.split('').map(c=>{
  const corrections={'0':'O','1':'I','5':'S'}
  return corrections[c]||c
    }
).join``
}