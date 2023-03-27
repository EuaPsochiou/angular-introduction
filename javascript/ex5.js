const Obj = {
    name: "John",
    age: "30",
    greet: function() {
        console.log(`Hello my name is ${this.name}`)
    }
};

Obj.greet();

const pgreet = Obj.greet;
pgreet();