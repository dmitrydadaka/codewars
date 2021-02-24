function billboard(name, price = 30){
    return Array(name.length).fill(price).reduce((a,b)=>a+b,0)
    } 