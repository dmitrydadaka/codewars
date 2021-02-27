class Ghost  {
    constructor(){
     this.colors=['white','yellow', 'purple', 'red']
      }
     get color(){
  var random=Math.round(Math.random()*3)
  return this.colors[random]
     } 
    }