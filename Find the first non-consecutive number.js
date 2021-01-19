function firstNonConsecutive (a) {
    for(i=1;i<a.length;i++)
      if(a[i-1]+1!=a[i]){return a[i]}
      return null
    }