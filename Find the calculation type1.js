function calcType(a,b,r){
    if(r==a+b){return 'addition'}
    else if(r==a*b){return 'multiplication'}
    else if(r=a-b&&r!=a/b){ return 'subtraction'}
    else if(r=a/b){ return'division'}
    }