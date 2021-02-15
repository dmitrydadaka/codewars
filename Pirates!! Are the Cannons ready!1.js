const cannonsReady = (gunners) => {
    for(let i in gunners){
  if(gunners[i]=='nay') return 'Shiver me timbers!'
    }
    return 'Fire!'
  }