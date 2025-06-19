//4. Sum of Products of Corresponding Digits



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
