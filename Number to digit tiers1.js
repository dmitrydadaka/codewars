function createArrayOfTiers(num) {
    let prev=''
    return [...num+''].map(v=>prev+=v)
}