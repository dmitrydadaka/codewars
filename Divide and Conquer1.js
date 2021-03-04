function divCon(x){
    return x.reduce((a,b)=>a+(typeof b=='string'?-b:b),0)
    }