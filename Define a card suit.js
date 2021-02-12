function defineSuit(card) {
    return {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }[card.charAt(card.length - 1)]
  }
  