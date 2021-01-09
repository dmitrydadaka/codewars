function checkParity(parity,bin){
    
    const a=(bin.match(/1/g) || []).length;
    let isEven = a% 2 === 0;

    return parity=="even"? isEven ? 0: 1 : isEven ? 1 : 0   
    
}
