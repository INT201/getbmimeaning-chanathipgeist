const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/Math.pow(height,2)
}
function getBMIMeaning(weight, height) {
  let bmi=calculateBMI(weight, height)
  if(bmi>25.0){
    return Overweight
  }else if(bmi>=18.5 && bmi<=24.9){
  return Normal weight
}else{
 return Underweight
}
}

module.exports = getBMIMeaning
