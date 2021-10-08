let leet;

leet = '123';

// if you need to use as a number, you might use type assertion

// let number = leet as number; // compile type error // type assertion is not the same as type casting

// to convert string to a number
// this type of type manipulation in javascript is called type coversion
let num = +leet;

console.log(num === 123);
