// Why 'immutable'? What is it???
// this word can be understand by

// mutable -> comes from mutation
// mutation = change
// immutable -> CANNOT change
// Welcome Mr. const into the chat :)

const name = 'jack'
// name = 'john' // Uncaught TypeError : Assignment to constant variable

// Basically you can't redifine a variable's value after const
// So the above example shows that it's impossible to re-assign a new value to the variable 'name'
// Re-assignment does not work with primitive data-types, which are

// Primitive data-type
// 1. Boolean
// 2. String
// 3. Number (Integer and Float)
// 4. Undefined
// 5. Null
// And some extras you can remember them if you want to ( ' _ ' ) 
// But please please please remember the other five above
// 6. BigInt
// 7. Symbol

// However Re-assignment can work on Non-primitive Data Type (AKA Complex Data Type)
// Complex Data Types
// 1. Arrays ()
// 2. Objects {}
// THEY ARE IMPORTANT TOO PLEASE REMEMBER THEM LIKE IT'S YOUR KID :)

// But what does 'work' mean though? 
// You technically cannot re-assign a new array or object, but you can change the contents within.
const list = ['apple', 'orange']
list.push('mango')
console.log(list) // ['apple', 'orange', 'mango']

// There's the above example, you can clearly see the changed const variable contents
// It was supposed to be just ['apple', 'orange']
// Yet you can added ['mango'] into it using 'push' array function.

// Now... Objectsss
// You can also 'change' objects that are constant
const student = {
    name: 'Ze Yu',
    age: 18
}
student.age = 21; // you can change the field value
student.hobby = 'taekwondo' // you can even add a new field into it
console.log(student.age)  // 21
console.log(student.hobby) // taekwondo

// However you cannot re-assign a new object
student = {
    name: 'Sky',
    age: 18
}
// It'll show something...
// "TypeError: Attempt to assign to readonly property"
// Basically you can change the content and even add content, BUTT you cannot redifine the const variable as a new object just like your mistakes :)