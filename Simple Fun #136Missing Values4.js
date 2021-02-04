const ia=require('lodash')

const missingValues=a=>{
let ya=ia(a).countBy().invert().value()
return ya[1]**2*ya[2]
}