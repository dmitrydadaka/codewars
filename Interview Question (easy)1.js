function getStrings(city){
    const city1=city.replace(/ /g, '').toLowerCase().split('')
    return JSON.stringify(city1.reduce((obj,item)=>{
     return {
       ...obj,
       [item]:obj[item]?obj[item]+'*':'*'
     } 
    },{})).replace( /['"{}]+/g,"")
  }