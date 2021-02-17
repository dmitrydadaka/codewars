function whoseMove(lastPlayer, win) {
    return win==true?lastPlayer:lastPlayer=='black'?'white':'black'  
    }