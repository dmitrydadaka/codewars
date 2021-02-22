trouble = (x,t) => x.reduce((prev, curr) => {
    if( !prev.length || curr+prev[prev.length - 1] !== t )
      prev.push(curr)
    return prev
  }, [])