// There are two ways to think of typescript
// one way is the calling context
// the other way is lexical scoped

class Person {
  private _age: number;

  constructor(_age: number) {
    this._age = _age;
  }

  growOld() {
    this._age++;
  }

  age() {
    return this._age;
  }
}

// the calling context
// since growOld is not arrow function, this will be driven by the calling context
// so this will refer to Person
const person = new Person(0);
person.growOld();
console.log('age', person.age());

const growOld = person.growOld;
growOld(); // error this is undefined
setTimeout(() => person.growOld(), 1000); // same error
console.log('age', person.age());

// You might think, you will not store function in a variable
// But, fortunately, Javascript offers lexical scoped, the way to use that is within arrow function

class UpdatedPerson {
  private _age: number;

  constructor(_age: number) {
    this._age = _age;
  }

  // we creating growOld as a property
  // pointing to arrow function
  // arrow function capture 'this' from the srrounding context
  // since all property initializer execute at the end of the constructor
  // 'this' will be pound to whatever instance is writte to the constructor
  growOld = () => {
    this._age++;
  };

  age() {
    return this._age;
  }
}
