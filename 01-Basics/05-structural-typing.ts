type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user-123' };
let product: Product = { id: 'product-123' };

// The structure for the user and the product are the same
// Typesctpt's type system is structural, it doesn't care about the name of the types
// product and the user both has the same type compatibility
// This means you can assign user to product and vice versa
user = product;
product = user;

// Another example
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

// extra info is OK
// Another feature of typescript strctural type system is extra info is OK
// this means assigning point2D to point3D is OK
// This also aka Duck Typing: this means if it walks like a duck and quacks like a duck, then it must be a duck
point2D = point3D;

// missing info => compile time error
// point3D = point2D
