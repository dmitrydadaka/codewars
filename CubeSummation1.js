function cubeSum(n, m) {
    let a = 0

    if (n > m) {
        for (let x = m + 1; x <= n; x++) {
            a += x * x * x
        }
    }
    else {
        for (let x = n + 1; x <= m; x++) {
            a += x * x * x
        }
    }
    return a
}