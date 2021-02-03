function countPositivesSumNegatives(input) {
    if(input==null) return []
    if(input.length<1&&input!=null) return []
    const ci=[0,0]
    input.forEach(x=>x>0?ci[0]+=1:ci[1]+=x) 
      return ci
    }