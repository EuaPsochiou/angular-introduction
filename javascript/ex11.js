class Person {
    #firstname;
    #lastname;

    constructor(firstName, lastName) {
        this.#firstname = firstName;
        this.#lastname = lastName;
    }

    get fullname() {
        return this.#firstname + " " + this.#lastname;
    }

    set fullname(name) {
        const [firstName, lastName] = name.split(" ");
        this.#firstname = firstName;
        this.#lastname = lastName;
    }

    // fullname() {
    //     return this.#firstname + " " + this.#lastname;
    // }
}

const p = new Person("John", "Doe");
console.log(p.fullname);

p.fullname = "Eua Psochiou";
console.log(p.fullname);
