function findMultiples(int, l) {
    return Array.from(Array(Math.floor(l/int)),(_,i)=>int+i*int)
    }