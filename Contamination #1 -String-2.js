function contamination(text, char){
    return text==''?'':text.split('').map(x=>x=char).join``
  }