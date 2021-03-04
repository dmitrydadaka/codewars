const decrypt = (str) => {
    return str.replace(/'(.+?)'/g,(_,i)=>String.fromCharCode(i)).split('').reverse().join('')
  }
  const decrypt = (str) => {
    return str.replace(/'\d+'/g,v=>String.fromCharCode(v.replace(/'/g,'')*1))
      .split('').reverse().join``
  }