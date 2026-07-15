// You have learned how to declare a normal function like
function sayHello(){
    console.log("Hello")
}

// You can also do something similiar, with your arrow functions
// Syntax
// const functionName = (arguments) => doSomething
const sayAnotherHello = () => console.log("Another Hello!")

// With this example, try to write an arrow function for multiplication
// HINT: Answer in portal :)
const multiplication = (num1, num2) => num1 * num2
console.log (multiplication(6, 7)) // 42

// Don't be alarmed by the word 'Callbacks'
// Just think of it as a special function for special procedure
const list = [2, 4, 6, 8]
// The filter function seerces as a Callback
const list2 = list.filter(num => num > 5) // This is the callback
console.log(list2) // [6, 8]

// Normally you have to write function like this
const list3 = list.filter(function(num){ return num > 5})
console.log(list3) // [6, 8]

// The example above is the counterpart to using arrow function
// Same result yet using function is LONGERRR than using arrow function 0 _ 0
