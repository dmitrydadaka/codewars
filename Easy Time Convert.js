timeConvert=n=>[n/60,n%60]
.map(x=>(Math.floor(Math.max(0,x))+'').padStart(2,'0')).join(':')
function timeConvert(num) { 
    return num>0?`${(Math.floor(num/60)+'').padStart(2,'0')}:${(num%60+'').padStart(2,'0')}`:'00:00'
    }
    function timeConvert(num) { 
        return num<=0?'00:00':(Math.floor(num/60)>9?
          Math.floor(num/60)+'':'0'+Math.floor(num/60))+':'+(num%60>9?num%60:'0'+num%60)
        }