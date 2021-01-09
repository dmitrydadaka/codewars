function checkParity(parity,bin){
    function bitCount(bin){
        return (bin.match(/1/g) || []).length;
    }
    
    let isEven = bitCount(bin) % 2 === 0;
    if(parity.match(/^e$|^even$/i)) return isEven ? 0: 1;
    return isEven ? 1 : 0;
}