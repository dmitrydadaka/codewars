function drawStairs(n) {
    let str=''
    for(i=0;i<n;i++){
    str+=' '.repeat(i)+"I\n"
    }
    return str.slice(0,-1)
  }