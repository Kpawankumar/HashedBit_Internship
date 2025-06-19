//2. Calculator Function with switch for +, −, ×, ÷



function calculate(a, b, operator) {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b !== 0) {
        result = a / b;
      } else {
        result = 'Cannot divide by zero';
      }
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
}

// Example:
console.log(calculate(10, 5, '+')); 
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*')); 
console.log(calculate(10, 5, '/')); 
