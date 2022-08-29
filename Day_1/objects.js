let obj1 = []
console.log(obj1)
obj1['name'] = 'John'
obj1['age'] = 22
console.log(obj1)
// Nested objects
let obj2 = { 'name': 'John', 'address': { 'state': 'AZ', 'country': 'US' } }
console.log(obj2.address.state)
console.log(obj2.name)

//
let obj3 = { 'name': 'Youssef', 'age': 46 }

for (let property in obj3) {
    console.log(property)
}