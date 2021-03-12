function evenChars(s) {
    return s.length<2||s.length>99? "invalid string":s.split('').filter((x,i)=>i%2!=0)
    }
    function evenChars(string) {
        return (string.length < 2 || string.length > 100) ? "invalid string" : 
        [...string].filter((x, i) => i % 2);
      }