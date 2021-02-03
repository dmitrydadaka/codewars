const whatNote = (string, fret) => {
    const a=['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    string=string.toUpperCase()
    while(fret>=12){
    fret-=12
    }
    return (a.indexOf(string)+fret)>a.length?a[((a.indexOf(string)+fret)%a.length)]
    :a[a.indexOf(string)+fret]||'A'
   
  }