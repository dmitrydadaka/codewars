function solve(arr){
    const newArr=[]
    //newArr.push(b,a) 
    while(arr.length>1){
    
    arr.sort((a,b)=>a-b)
    const a=arr[0]
    const b=arr[arr.length-1]
    newArr.push(b,a)
    arr.shift()
    arr.pop()
    }
    if(arr.length==1){
      newArr.push(arr[arr.length-1])
    }  
    return newArr
     
  };