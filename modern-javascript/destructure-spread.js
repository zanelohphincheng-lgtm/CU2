// Basically Combining both destrucuring function and spread function

// Destructuring and Spread with Arrays
// Example you have an array of numbers and you want to destructure 
// the first as a variable and the rest as the original array.

const numbers = [1, 2, 3, 4, 5, 6]
const [first, ...rest] = numbers
console.log(first) // 1
console.log(rest)  // [2, 3, 4, 5, 6]

// Destructuring and Spread with Objects
const user = {
    name: 'WenYao',
    age: 18,
    profession: 'student'
}
const updatedUser = {
    ...user,
    name: 'Arthur'
}
console.log(updatedUser)

// Combining Destructuring and Spread in Function Arguments
const newUser = {
    id: 1,
    userName: 'Nicholas',
    userAge: 18,
    userProfession: 'student'
}
const printUserInfo = ({userName, ...rest}) => {
    console.log(userName)
    console.log(rest)
}
// It's just that it's used in the form of a function
printUserInfo(newUser)
// Nicholas
// { id: 1, userAge: 18, userProfession: 'student'}