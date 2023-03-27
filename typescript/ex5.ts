interface Person {
  name: string;
  age: number;
}

interface Employee {
  company: string;
  role: string;
}

type PersonAndEmployee = Person & Employee;

let jim: PersonAndEmployee = {
  name: "Jim",
  age: 33,
  company: "OPA",
  role: "Engineer",
};
