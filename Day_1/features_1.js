//arrow functions: providing a simple way for writting functions
// arrow functs make it easier to use a function within another func
// rules: 1) if there is no param within a given func then we have to pass empty round brackets ().
//2) If there is a single param then no need for ()
//3) if there are more than 1 param then () are required.
// general syntax 
// variable = parameter => {body}
// rule 4) if there is only a single statement in the body then no need for {} and no need for return statement
// arrow functions are auto bindable

var hello = () => console.log("hello")
hello()

var square = n => n * n
console.log(square(4))

var sum = (a, b) => a + b
console.log(sum(40, 50))

var sample = () => {
    console.log('hello')
    console.log('hello again')
}
sample()