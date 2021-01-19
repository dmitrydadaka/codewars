function checkExam(a, b) {
    var count=0
    for(i=0;i<a.length;i++){
      if(a[i]==b[i]){count+=4}
      else if(b[i]==''){count+=0}
      else {count-=1}
    }
     return count>0?count:0
   }