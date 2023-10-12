import { object } from "zod";

function testArray<T>(arg: T[]): T[] {
  return arg.reverse();
}
console.log(testArray([1, 3, 5, 7, 9]));
console.log(testArray(["Sandra", "Matin", "Abdul"]));

function makePair<key, value>(
  Key: key,
  Value: value
): { Key: key; Value: value } {
  return { Key, Value };
}

console.log(makePair("name", "sandra"));
console.log(makePair("age", 28));

interface Box<T> {
  item: T;
}

function unbox<T>(box: Box<T>): T {
  return box.item;
}
const stringBox: Box<string> = { item: "Hello, TypeScript!" };
console.log(unbox(stringBox)); // "Hello, TypeScript!"

const numberBox: Box<number> = { item: 67 };
console.log(numberBox);

//Hur kan man begränsa så att exempelvis en funktion med generiska typer inte tillåter alla typer utan endast exempelvis string eller number?

function stringNumbers<T>(arg: string | number): string | number {
  return arg;
}

stringNumbers(123);
console.log(stringNumbers("Matin"));
