function averages(n) {
    return n?n.map((c,i,_)=>((c+n[i+1])/2)).slice(0,-1):[]
    }