alwaysOdd=n=>n-!(n%2)
alwaysOdd=n=>n&1?n:--n
alwaysOdd=n=>n---(n&1)
alwaysOdd=n=>n-1|1
alwaysOdd=n=>n*n%2+n-1
alwaysOdd=n=>n%2?n:n-1