// Spread Operator
// What is it used for?
// Think of it as to help you expand your entire array OR object
// Mostly Array

// Example
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

const numsCombined = [...num1, ...num2]
// The "..." before num1 and num2 IS your spread operator
console.log(numsCombined) // [1, 2, 3, 4, 5, 6]

// What is the difference if you don't put the "..."?
const numsCombinedWithoutSpread = [num1, num2]
console.log(numsCombinedWithoutSpread) // [1, 2, 3], [4, 5, 6]

// Basically Spread Operator places the values into one array
// While without spread still seperates them apart

const original = ['this', 'is', 'the', 'original']
const copy = [...original]

console.log(original)
console.log(copy)
// Spread Operator with Objects
const person = {
    jackyName: 'Jacky',
    jackyAge: 20
}
const student = {
    ...person,
    grade: 'Diploma'
}
console.log(student) // { name: 'Jacky', age: 20, grade: 'Diploma' }

// Just like with arrays, you can also make a copy with objects by using the spread operator
const copyOfStudent = {...student}
console.log(copyOfStudent) // { name: 'Jacky', age: 20, grade: 'Diploma' }



// Spread Operator in Function Arguments
function sum(a, b, c, d, e, f){
    return a + b + c + d + e + f
}
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(sum(...nums))