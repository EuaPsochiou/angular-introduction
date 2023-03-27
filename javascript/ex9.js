class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}


const john = new Person("John", "Doe")
const jane = new Person("Jane", "Smith")

console.log(john.fullname())
console.log(jane.fullname())