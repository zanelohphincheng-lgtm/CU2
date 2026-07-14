// Difference between var and let

var name = 'jack'

function printName(){
    var name = 'john'
    console.log(name)
}

printName() // 'john' because this is the console.log from the function itself
console.log(name) // 'jack' this console.log takes back the original 'name'

// Why does this happened? Because functional-scoped can do declaration for other things inside another function
// var is functional-scope while let is a block-scoped
// So what if it's not a functional block?
if(true){
    var name = 'jason'
    console.log(name) // 'jason' 
}
console.log(name) // 'jason' because the variable 'name' has been redefine by the true statement here

// Onto let

let age = 37

function printAge(){
    let age = 45
    console.log(age)
}
printAge() // '45' same thing it's the console.log printing 45 as the answer
console.log(age) // '37' same thing still taking the original value for the variable

if(true){
    let age = 10
    console.log(age) // '10' because the true statement BUT it only shows '10' within the if's curly brackets
}
console.log(age) // '37' which means it's still taking the original value OUTSIDE the if's curly brackets

// CONCLUSION : let > var    :)