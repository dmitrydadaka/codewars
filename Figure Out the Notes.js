const whatNote = (string, fret) => {
    const d = [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
return d[(d.indexOf(string.toUpperCase())+fret)%d.length]
};