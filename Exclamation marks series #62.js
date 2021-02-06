function remove(s,n){
    return n? remove(s.replace("!",''),n-1):s
    }