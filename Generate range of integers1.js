function generateRange(min, max, step){
    return [...Array((max-min)/step+1^0)].map((_,i)=>min+i*step)
    }