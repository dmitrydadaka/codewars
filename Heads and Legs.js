function animals(heads, legs){
    for(var i = 0; i <= heads; i++){
      if( (i * 4 + (heads- i) * 2) == legs){
        return [heads- i,i];
      }
    }
    return 'No solutions';
  }