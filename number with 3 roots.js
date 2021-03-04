perfectRoots=(n)=>n**.125%1==0
function perfectRoots(n){
    const a=Math.pow(n,1/2)
    const b=Math.pow(n,1/4)
    const c=Math.pow(n, 1/8)
    return a%1==0&&b%1==0&&c%1==0
    }