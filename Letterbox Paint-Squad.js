var paintLetterboxes = function(start, end) {
    return Array(10).fill(0).map((_,i)=>Array.from(Array(end-(start-1)),(_,i)=>i+start)
    .join``.split('').filter(x=>x==i).length)
    }