function fistBeard(arr) {
    return [].concat.apply([], arr).map(x=>String.fromCharCode(x)).join``
   }