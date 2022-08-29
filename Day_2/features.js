//const is a variable which has an assigned only once = value cannot be changed
const pi = 3.14
//pi = 4 TypeError: Assignment to constant variable.
let a = 10 // let is more prefered for local variables
let b = 20
console.log('sum of ', a, 'and', b, '=', a + b)
console.log(`sum of ${a} and ${b} = ${a + b}`) // template string. added in ES 6