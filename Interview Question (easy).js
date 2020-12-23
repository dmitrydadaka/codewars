function getStrings(city){
    let city1=city.toLowerCase().split("").filter(el=>el!=" ")
    let obj={}
    let str=[]
    for(let e of city1){
      if(!obj[e]){
        obj[e]="*"
      }else{
        obj[e]+="*"
      }
    }
    for(let [key,value] of Object.entries(obj)){
      str.push(`${key}:${value}`)
    }
  
    return str.join(",")
  }