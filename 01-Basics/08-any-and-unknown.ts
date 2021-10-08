// Both any and unknown are super types in typescript
// any type of variable can be assigned to type of any or unkown

// any
// gives you complete freedom to assign anything to a varaible
// without worrrying about type checks
// any exist to allow you to completely bypass the typescript type checks if your are in a rush
let exampleAny = 123;
let exampleAny2 = 'hello';

// you can build any ridiclus chain you can imagine
// exampleAny!.allows.anything.you.can.imagine();

// unkown
// unkown is safer than any
// you cannot use in unsafe manner
// is a more type safe of any
let exampleUnkown: unknown;
exampleUnkown = 123;
exampleUnkown = 'hello';

// exampleUnkown.trim()  // you cannot access any property // compile time error
// let unkownSetBool: boolean = exampleUnkown // you cant assign it to a well defined variable

// you have to check type first
if (typeof exampleUnkown === 'string') {
  exampleUnkown.trim();
}
