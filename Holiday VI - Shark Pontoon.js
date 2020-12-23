function shark(pD, sD, yS, sS, dolphin){
    if(dolphin){
      sS/=2
    }
    return pD/yS<sD/sS?"Alive!": "Shark Bait!"
  }