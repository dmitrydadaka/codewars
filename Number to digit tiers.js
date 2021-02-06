function createArrayOfTiers(num) {
    return Array.from(Array(String(num).length), (_,i)=>num.toString().slice(0,i+1))
 }