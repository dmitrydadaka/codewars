function generateRange(min, max, step){
    return Array.from({length:1+(max-min)/step},(_,idx)=>min+idx*step)
    }