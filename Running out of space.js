function spacey(array){
    return array.map((_,i)=>array.slice(0,i+1).join``)
    }
    spacey=(a,s="")=>a.map(a=>s+=a)
    function spacey(array){
        let string=''
        return array.map(s=>string+=s)
        }
        function spacey(a){
            return Array.from(Array(a.length),(_,i)=>a.slice(0,i+1).join``)
            }        