const cannonsReady = (gunners) => {
    return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
  }