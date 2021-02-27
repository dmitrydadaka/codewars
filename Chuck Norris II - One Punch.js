function onePunch(i){
    if(i.length==0||typeof i=='number'||Array.isArray(i))return 'Broken!'
 return i.split(' ').sort().join(' ').replace(/[ae]/gi,'')
 } 