function movie(card, ticket, perc) {
    let cardA=0
    let n=0
    
      while(Math.ceil(card)>=cardA){
   cardA+=ticket
   card+=ticket*Math.pow(perc,++n)
            }
    return n
  };