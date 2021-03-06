const jeringonza = s => s.replace(/[aeiou]/gi, x => (x+(x>"Z"?"p":"P")+x) );
function jeringonza(str) {
    const dic = {'a':'apa', 'e':'epe', 'i':'ipi', 'o':'opo', 'u': 'upu',
             'A':'APA', 'E':'EPE', 'I':'IPI', 'O':'OPO', 'U':'UPU'}
    return str.replace(/[aeiou]/gi, x=> dic[x])
  }
  function jeringonza(s) {
    return s.split('').map(x=>x.replace(/[aoiue]/gi,x=>x==x.toLowerCase()?x+'p'+x:x+'P'+x)).join``
  }