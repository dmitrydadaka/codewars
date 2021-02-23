function pickIt(arr){
    var odd=[],even=[];
    for(v of arr){
      (v%2?odd:even).push(v)
    } 
    return [odd,even];
}  