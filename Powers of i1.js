function pofi(n) {
    if (n === 0) return '1';
    if (n === 1) return 'i';
    if (n === 2) return '-1';
    if (n === 3) return '-i';
    let a = n
    while (a > 3) {
        a -= 4;
    }
    return pofi(a)
}