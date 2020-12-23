function myLanguages(results) {

    return Object.entries(results).sort((a,b)=>b[1]-a[1])
      .filter((a)=>a[1]>=60).map((a)=>a[0])
    }