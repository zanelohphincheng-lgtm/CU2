// Question 1
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
 { title: '1984', author: 'George Orwell', ratings: 4.7 },
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
 { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const highlyRatedBooks = books.filter(book => book.ratings > 4);
console.log(highlyRatedBooks)

// Question 2
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
 { title: '1984', author: 'George Orwell', ratings: 4.7 },
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
 { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const bookTitles = books.map(book => book.title);
console.log(bookTitles)

// Question 3
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
 { title: '1984', author: 'George Orwell', ratings: 4.7 },
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
 { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const book1984 = books.find(book => book.title === '1984');
console.log(book1984)

// Question 4
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
 { title: '1984', author: 'George Orwell', ratings: 4.7 },
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
 { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const sortedBooks = [...books].sort((a, b) => b.ratings - a.ratings); // "a" is basically meaning the smallest number and "b" is the largest number
                                                                      // So based on this "b - a" means "From the largest to the smallest"
                                                                      // With "a - b" it's "From smallest to largest"
console.log(sortedBooks)

// Question 5
const books = [
 { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
 { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
 { title: '1984', author: 'George Orwell', ratings: 4.7 },
 { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
 { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

const highestRatedBook = [...books]
 .sort((a, b) => b.ratings - a.ratings)
 .map(book => book.title)[0]; // After .sort, we only want the first and top book which is 'The Great Gatsby'
                              // so we put [0] as index 0 to grab the first array of object

console.log(highestRatedBook)
