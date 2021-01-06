function fourSeasons(d){
    if(d<80||d>354&&d<366)
    {return 'Winter Season'}else
    if(d>79&&d<172)
    {return 'Spring Season'}else
    if(d>171&&d<274)
    {return 'Summer Season'}else
    if(d>273&&d<354){
    return 'Autumn Season'
    }
     return 'The year flew by!'
    }