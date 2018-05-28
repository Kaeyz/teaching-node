var greeting = 'welcome'
var name = 'Kolade'

console.log(`Hello, ${name}!! ${greeting}`)

exports.add = function(a, b) {
  if((typeof a === 'number') && (typeof b === 'number')) {
    // console.log(assert.equal(a, b))
    
    console.log(`Sum of ${a} + ${b} = ${a+b}`)
  } else {
    console.log('we are not numbers')
  }
}



