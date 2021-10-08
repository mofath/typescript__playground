type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Rectangle | Square;

function area(shape: Shape) {
  if ('size' in shape) return shape.size * shape.size;
  if ('width' in shape) return shape.width * shape.height;
}

// Discrimanated Unions
type ValidationSuccess = {
  isValid: true;
  validateValue: string;
};

type ValidationError = {
  isValid: false;
  errorMessage: string;
};

type ValidationResult = ValidationError | ValidationSuccess;

function logResul(result: ValidationResult) {
  if (result.isValid) {
    console.log('Success', result.validateValue);
  }
  if (result.isValid === false) {
    console.log('Failure', result.errorMessage);
  }
}
