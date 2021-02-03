const paintLetterboxes = (start, end) => Array(10).fill(0).map((_,i)=>
Array(end - start+1).fill(0).reduce((s,a,i)=> s + (start +i),'').split('')
.filter(e=> e==i).length);