function solve(stones) {
    let sD=0
    for(i=0;i<stones.length;i++){
      if(stones[i]==stones[i-1])
        sD++
    }
    return sD;
  }