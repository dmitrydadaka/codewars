function xMasTree(n){
    var arr=[]
    for(var i=0;i<n;i++){
      arr.push("_".repeat(n-i-1)+"#".repeat(i*2+1)+"_".repeat(n-i-1))
    }
    arr.push(arr[0],arr[0])
    return arr
  }