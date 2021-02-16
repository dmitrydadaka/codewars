function charFreq(message){
    return message.split('').reduce((a, char) => { 
    a[char]=a[char]?a[char]+1:1 
    return a},{})}