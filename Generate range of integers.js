function generateRange(min, max, step){
    return [...Array(Math.floor((max-min)/step+1))].map((_,i)=>min+i*step)
    }