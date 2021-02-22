function spoonerize(words) {
    var s=words.split(' ')
    return [s[1][0]+s[0].slice(1),s[0][0]+s[1].slice(1)].join` `
}