const personDescription = (name: string, city: string, age: number) =>
  `${name} lives in ${city}, is ${age} years old. In ten years he will be ${
    age + 10
  }`;
console.log(personDescription("Eua", "Preveza", 29));
