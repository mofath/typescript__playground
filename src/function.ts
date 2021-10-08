function add(a: number, b: number): number {
  return a + b;
}

function log(msg: string): void {
  console.log(msg);
}

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// providing a way to represent variadic functions in JavaScript.
function sum(...theArgs: number[]) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2); // 3
sum(1, 2, 3); // 6

// first class function: store function in a variable
let adder: (a: number, b: number) => number;

adder = function (a: number, b: number): number {
  return a + b;
};
