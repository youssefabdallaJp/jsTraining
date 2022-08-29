// Old way to create object

function Person(name, age) {
    this.name = name
    this.age = age
    this.dispaly = () =>{
        console.log(this.name, this.age)
    }
}

let p1 = new Person('John', 34)

console.log(p1)
p1.dispaly