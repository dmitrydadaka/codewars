function charFreq(message) {
    a={}
    for(v of message)if(a[v])a[v]++
    else a[v]=1
    return a
    }
    