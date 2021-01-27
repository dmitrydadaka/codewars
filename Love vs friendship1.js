function wordsToMarks(string){
    return [...string].reduce((x,y)=>x+(y.charCodeAt()-96),0)
  }