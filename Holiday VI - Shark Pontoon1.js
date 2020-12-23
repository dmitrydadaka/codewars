function shark(pD, sD, yS, sS, dolphin){
    const alive=pD/yS
    let sB=sD/sS
    if(dolphin==true){
      const d=sS/2
      sB=sD/d
    }
    if(sB>alive){
      return "Alive!"
    }else{
      return "Shark Bait!"
    }
    }