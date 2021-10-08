// Union types are one of the ways in which you can compose types.

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected number or sring, got ${padding}`);
}

console.log(padLeft('Hello World', 4)); //    Hello World
console.log(padLeft('Hello World', '   ')); //   Hello World
console.log(padLeft('Hello World', '___')); // ___Hello World

// let indentedString = padLeft('Hello world', true); // compile type error
