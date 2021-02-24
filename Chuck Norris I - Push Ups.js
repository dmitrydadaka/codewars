function chuckPushUps(string) {
    if (typeof string !== 'string'||string.length===0) return 'FAIL!!'
    if(/[01]/.test(string)) return Math.max(...string.split(' ').map(x=>x.replace(/[^01]/g,''))
                                            .map(x=>parseInt(x,2)).filter(x=>!isNaN(x)))
    return 'CHUCK SMASH!!'
    }