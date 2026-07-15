// Question 1
const book = {
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
  publication: {
    year: 1937,
    publisher: 'George Allen & Unwin'
  }
};

const { title, author, characters } = book;
const { year, publisher } = book.publication;

// Question 2
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj1 };

// Question 3
const data = {
  numbers1: [1, 2, 3, 4],
  numbers2: [5, 6, 7, 8]
};

const { numbers1: array1, numbers2: array2 } = data; // Extract "numbers1" and "numbers2" from "data"
console.log(array1)
console.log(array2)

const array3 = [...array1, ...array2]; // Place them together in one array
console.log(array3)