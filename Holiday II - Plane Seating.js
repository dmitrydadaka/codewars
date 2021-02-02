function planeSeat(a){
    let n=a.replace(/[a-z]/gi,'')*1
   let s=a.replace(/[0-9]/gi,'')
   if(s=='I'||s=='J') return 'No Seat!!'
   if(n>60) return 'No Seat!!'
 return `${n<21?'Front':n<41?'Middle':'Back'}-${s=='A'||s=='B'||s=='C'?'Left':s=='D'||s=='E'||s=='F'?'Middle':'Right'}`
 }