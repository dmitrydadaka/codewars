evil = n => ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length-1) & 1];
