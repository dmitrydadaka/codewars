const noOdds = values => 
  values.filter(val => !(val&1));
  function noOdds( values ){
    return values.filter(x=>x%2==0)
  }