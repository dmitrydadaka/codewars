var whoTookTheCarKey = ( arr )=> arr.map(el=> String.fromCodePoint(parseInt(el, 2))).join('')
function whoTookTheCarKey(m) {
    return m.map(x=>parseInt(x*1,2)).map(x=>String.fromCharCode(x)).join``
  }