// Question 1
const student = {
  id: '101',
  name: 'John Doe',
  courses: ['Math', 'English', 'Science'],
  parents: {
    father: 'Mr. Doe',
    mother: 'Mrs. Doe'
  }
};

const { id, name, courses, parents: {father, mother}} = student

console.log(id); // 101
console.log(name); // John Doe
console.log(father); // Mr. Doe

// Question 2
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1];

console.log(arr3) // [1, 2, 3, 4, 5, 6]
console.log(arr4) // [1, 2, 3]

// Question 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [num1, num2, num3, num4, num5, ...secondHalf] = numbers; // First we'll have to seperate the first five numbers and the rest of it
                                                               // By putting some variables as a temporily placeholders for these five number
                                                               // and putting "...secondHalf" like "...rest" to take up all the remaining numbers in the arrays
const firstHalf = [num1, num2, num3, num4, num5]; // Placing the first five numbers into "firstHalf"

console.log(firstHalf) // [1, 2, 3, 4, 5]
console.log(secondHalf) // [6, 7, 8, 9]

// Question 4
const numbers = [ 1, 2, 3 ];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)) // "...numbers" basically tells the function to pick whatever value it has in that array and place them in the variable's place inside the function
                             // if the array has more value than the function's variable, it'll still work by ignoring the extra value and pick the first few
                             // But if your array has less value than the function's variable, it'll not work even if it's just one or two variable has no value
