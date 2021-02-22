const blackAndWhite = array =>{
    let arrayType = ''
  
    if (!Array.isArray(array)) arrayType = 'fake'
    else if (array.includes(5) && array.includes(13)) arrayType = 'black'
    else if (!(array.includes(5) && array.includes(13))) arrayType = 'white'
  
    return `It\'s a ${arrayType} array`
  }