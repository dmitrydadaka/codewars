const dateNbDays = (a0, a, p) =>
  new Date(2016, 0, 1 + Math.ceil(Math.log(a / a0) /
   Math.log(p / 36000 + 1))).toISOString().slice(0, 10);
   function dateNbDays(a0, a, p) {  
    var count=0
    while(a0<a){
      a0+=a0*p/100/360
      count++
    }
      var D = new Date(2016,01,01);
      D.setDate(D.getDate() + count-31)
      
      return D.toISOString().slice(0,10)
    }