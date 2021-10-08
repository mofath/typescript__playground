// Type inference: means we don't have to provide type annotations all the time
// We can use type inference when we immediately set a variable to a value
// Type inference saves some keystrokes

let flag = false; // Typesctipt has infered the type as boolean

let variable; // Typescript gives a variable with no type annotation and no immediately assigned a value, the type any

// A type assertion is like a type cast in other languages,
// it performs no special checking or restructuring of data.
// It has no runtime impact and is used purely by the compiler.

let text: unknown;

let trimmed = (text as string).trim();

// type assertion using angle bracket
// but not supported in ts5
trimmed = (<string>text).trim();
