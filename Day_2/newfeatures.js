class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    display = () => {
        console.log(this.name, this.age)
    }

    display1() {
        console.log(this.name, this.age)
    }
}

let p1 = new person('Youssef', 46)
p1.display1()