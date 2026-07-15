// Question 1
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Question 2
const numbers = [1, 2, 3, 4, 5];
const greaterThan2 = numbers.filter(num => num > 2)
console.log(greaterThan2) // Output : [3, 4, 5]

// Question 3
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num)
});

// Question 4
const numbers = [1, 2, 3, 4, 5, 6];
result = numbers.find(num => num % 3 === 0); // "%" is a modulas it finds the remainer
console.log(result); // Output: 3

// Question 5
const numbers = [1, 2, 3, 4, 5];

const result = numbers
 .filter(num => num > 2)
 .map(num => num ** 2); // The meaning of "**" is like "^" for power square or cube or more

console.log(result); // Output: [9, 16, 25]