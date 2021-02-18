
function sumArray(array) {
    if(array==[])return 0
    else if(array==null)return 0
    else if(array==undefined)return 0
    else if( array.length==1)return 0 //or all change on---> if (!Array.isArray(array)) return 0
    else return array.sort((a,b)=>a-b).slice(1,array.length-1).reduce((a,b)=>a+b,0)
    }