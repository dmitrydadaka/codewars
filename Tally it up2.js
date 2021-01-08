var scoreToTally = (score)=>score>4?"e <br>"+scoreToTally(score-5):score>0?" abcd"[score]:""
