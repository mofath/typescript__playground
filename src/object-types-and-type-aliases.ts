/// Inline type
let center: { x: number; y: number } = {
  x: 0,
  y: 2,
};

// Using Type alias
// Eliminate code dunlication
// Type aliases create a new name for a type
// Type aliases are sometimes similar to interfaces, but can name primitives, tuples, and any other types
// Aliasing doesn’t actually create a new type - it creates a new name to refer to that type.
// Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.
type Point = { x: number; y: number };

let unit: Point = {
  x: 2,
  y: 5,
};

// Just like interfaces, type aliases can also be generic - we can just add type parameters and use them on the right side of the alias declaration:
type Container<T> = { value: T };
