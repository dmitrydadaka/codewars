function calc(x){
    return x.replace(/./g, x=>x.charCodeAt()).replace(/[^7]/g, '').length * 6
    }