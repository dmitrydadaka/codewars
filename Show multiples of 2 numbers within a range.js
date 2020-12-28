const multiples=(s1,s2,s3)=>Array
.from({length:--s3})
.map((_,x)=>++x)
.filter(x=>(x%s1==0&&x%s2==0))