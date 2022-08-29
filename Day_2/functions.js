// functions are re-usable units
// It makes code modular


function add(a, b) {
    console.log(a + b)
}
add(20, 20)

// a function that can return a result
function square(x) {
    return x * x
}

console.log(square(4))

// create a function in a variable
var sum = function (a, b) {
    console.log(a + b)
}
sum(1, 2)



var sub = function (a, b) {
    console.log(a - b)
}
sub(2, 1)

// Known as meta programming, the advantage now is functions can be passed as params to other function
function perform(a, b, operation) {
    operation(a, b)
}

perform(100, 20, sum)
perform(200, 50, sub)