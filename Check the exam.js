function checkExam(a, b) {
    var count=b.reduce((total, b, index)=>{
      if(!b)return total
      if(b==a[index])return total+=4
      if(b!=a[index])return total-=1
    },0)
    
     return count>0?count:0
   }