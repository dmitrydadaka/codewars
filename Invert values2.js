function invert(a) {
    return a.map(x=>x>0?-x:Math.abs(x));
 }