const apples: number = 5;
// : number is out type annotation
// can only set apples to a number type

let speed: string;
speed = 'fast';
speed = 'slow';

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();
// type annotation

const todayDate = new Date();
// infers the type

// More Complex Syntax
const colors: string[] = ['red', 'blue', 'green'];
const bools: boolean[] = [false, true];
let nums: number[] = [];
nums.push(1);
nums.push(2);
console.log(nums);

class Car {}
let car: Car;

// Object Literal
const person: {
  name: string;
  age: number;
} = {
  name: 'Mehdi',
  age: 32,
};

// Another EX
const point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 10,
};

// Function Annotations
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// If declaration and initialization is on the same line, then TS will infer the type for us

// The ANY type
// TS will assign any type when it can't infer the type / doesn't know the type

// ** When to use annotations **
// 1) Functions tht return the any type
// JSON.parse can return any type and need to hell it what it will be
// TS cannot predict what the type will be, since it depends on string we are passing in
const json = '{"x": 10, "y": 20}';
const cordinates: {
  x: number;
  y: number;
} = JSON.parse(json);
console.log(cordinates);

// or with interface
interface Point {
  x: number;
  y: number;
}
const cords: Point = JSON.parse(json);

// TS we want to avoid the ANY type

// No type inference when we declate and initialize on different lines
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

words.forEach(() => {});

// When variable type cannot be infered correctly
let numbas = [-1, -10, 10];

// EX - when this will be a positive number or false
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbas.length; i++) {
  if (numbas[i] > 0) numberAboveZero = numbas[i];
}
if (numberAboveZero) {
  console.log('There is number above 0, and that number is ', numberAboveZero);
} else {
  console.log('No numbers above 0');
}
