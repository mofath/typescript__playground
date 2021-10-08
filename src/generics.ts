// Typescript supports Generics
// We can add generic type parameter as an argument to a class

class Stack<T> {
  private data: T[] = [];
  static readonly OVERFLOW = 'OVERFLOW';
  static readonly UNDERFLOW = 'UNDERFLOW';

  constructor(private size: number) {}

  push(item: T): number | string {
    return this.size > this.data.length ? this.data.push(item) : Stack.OVERFLOW;
  }

  pop(): T | string {
    return this.data.pop() || Stack.UNDERFLOW;
  }

  display(): void {
    this.data.forEach((item) => console.log(item.toString()));
  }
}

const numberStack = new Stack<number>(5);

numberStack.push(123);
numberStack.push(456);

// numberStack.push('hello') // compile type error
