function separateTypes(input) {
    return input.reduce((a,b)=>{
                      var k=typeof b
                      var m=a[k]
                      a[k]=m?[...m,b]:[b]
       return a},{})
    }
    