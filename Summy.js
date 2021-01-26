function summy(s){
    return s.split(' ').reduce((a,b)=>a+ +b,0)
}