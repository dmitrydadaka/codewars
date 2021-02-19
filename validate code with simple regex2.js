function validateCode (code) {
    code=code.toString().split('').map(x=>+x)
    if(code[0]==1)return true
    if(code[0]==2)return true
    if(code[0]==3)return true
    return false
    }