const flip=(d, a)=>{
    return d=='L'?a.sort((a,b)=>a-b).reverse():a.sort((a,b)=>a-b)
  }