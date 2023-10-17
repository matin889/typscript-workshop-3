// In TypeScript, "narrowing" refers to the process of reducing the type of a variable or expression from a broader type to a more specific or narrower type. This narrowing is typically achieved using type guards and conditional statements. Narrowing is a fundamental concept for ensuring type safety and enabling TypeScript to understand the specific types within a conditional block.

// Here are some common techniques for narrowing in TypeScript:

// Type Guards:
// Type guards are functions or expressions that check the type of a value and, if the type check is successful, narrow the type of the value within the block.

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const value: unknown = "Hello Typscript";

if (isString(value)) {
  console.log(value.toLowerCase());
}

// instanceof Operator:
// The instanceof operator can be used to check if an object is an instance of a particular class or constructor function.

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person: unknown = new Person("Matin");
if (person instanceof Person) {
  console.log(person.name);
}

// 'in 'Operator:
// The in operator is used to check if a property exists in an object.

interface Car {
  make: string;
  model: string;
}

const vehicle: Car = { make: "Honda", model: "Civic" };
if ("make" in vehicle) {
  // TypeScript narrows the type of `vehicle` to `{ make: string, model: string }`.
  console.log(vehicle.make);
}
