class Person {
  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, title) {
    super(firstName, lastName);
    this.title = title;
  }
}

let args = ["John", "Doe"];
let john = Reflect.construct(Person, args);

console.log(john);
console.log(john instanceof Person);
console.log(john.fullname);

let args0 = ["Jane", "Smith", "Software Engineer"];
const jane = Reflect.construct(Employee, args0, Person);
console.log(jane);

