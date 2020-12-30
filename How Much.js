function howmuch(m, n) {
    var i = Math.min(m, n);
    var j = Math.max(m, n);
    var res = [];
    while (i <= j) {
        if ((i % 9 == 1) && (i % 7 == 2)) {
            res = res.concat([["M: " + i, "B: " + ~~(i / 7), "C: " + ~~(i / 9)]]);  
        }
        i++;
    }
    return res;
}