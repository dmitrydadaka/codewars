function maxBall(v0) {
    let h=0
    let t=0
    let g=9.81
    let hd=0
    let tans=0
  while (true) {
          h = v0*1000/60/60*t - 0.5*g*t*t;
          t = t+0.1;
  
          if (h<hd) {
            return tans-1;
          }
  
          tans = tans+1;
          hd = h;
        }
   
    
  }