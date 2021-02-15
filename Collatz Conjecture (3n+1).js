var hotpo = function(n,i=0){
    return n<=1?i:hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, i+1)
    }