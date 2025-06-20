//1. Display Even Numbers from 2 to 100

console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//2. Calculator Function with switch for +, −, ×, ÷
console.log("Calculator Function with switch for +, −, ×, ÷");

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


//3. findTax() Function Using switch
console.log("findTax() Function Using switch");




function findTax(salary) {
  let taxRate;
  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return 'Invalid salary amount';
  }
  let taxAmount = salary * taxRate;
  return taxAmount;
}

// Example:
console.log(findTax(400000));  
console.log(findTax(750000));  
console.log(findTax(1200000)); 
console.log(findTax(2000000)); 



//4. Sum of Products of Corresponding Digits

console.log(" Sum of Products of Corresponding Digits:");

function sumOfProducts(n1, n2) {
  // Convert numbers to strings and reverse them to align digits from units place
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();
  let maxLength = Math.max(s1.length, s2.length);
  
  let sum = 0;
  for (let i = 0; i < maxLength; i++) {
    let digit1 = parseInt(s1[i] || '0', 10);
    let digit2 = parseInt(s2[i] || '0', 10);
    sum += digit1 * digit2;
  }
  return sum;
}

// Example:
console.log(sumOfProducts(6, 34));    
console.log(sumOfProducts(123, 456));  
