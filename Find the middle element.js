var gimme = function (inputArray) {
    let b=0
    let arr=[...inputArray].sort((a,b)=>a-b)
      for(let i=0;i<arr.length;i++){
      b=arr[1]
      }
    for(let i=0;i<inputArray.length;i++){
      if(b==inputArray[i]){
        return inputArray.indexOf(b)
      }
    }
  
  };
  