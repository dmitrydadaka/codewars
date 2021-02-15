function vowel2index(str) {
    return str.replace(/[aoeui]/gi, (m,i)=>i+1)
 }
 