function multiples(m, n){
    return m?[...arguments.callee(m-1,n),n*m]:[]
  }

  multiples=(m, n)=>[...Array(m)].map((x,i)=>++i*n)
  function multiples(m, n){
    return Array.from(Array(m),(_,i)=>(i+1)*n)
  }