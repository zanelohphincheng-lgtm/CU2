// !! Command out some of the codes to check the functions and console results !!
// ============================= VARIABLES ================================
// Unknown Value?
// But what if you do know the value?

// It's something to STORE DATA VALUES.
// Variables are basically values that are stored to a name

// For EXAMPLES :
// cat = 5
// So ypu know that "cat" is 5.

// But lets say that the cat's age is 7, you would declare that as :
// catAge = 7

// Declare 5 variables, and console log them all.
var teamA = "Chicago Bulls"
var teamB = "Golden State Warriors"
var teamAPoints = 123
var teamBPoints = 141
var teamBWin = true

console.log(teamA)
console.log(teamB)
console.log(teamAPoints)
console.log(teamBPoints)
console.log(teamBWin)

// Can you change the above console logs to include proper statements?
// Example :
// Team A : Chicago Bulls
// Team A Points : 123

var teamA = "Chicago Bulls"
var teamB = "Golden State Warriors"
var teamAPoints = 123
var teamBPoints = 141
var teamBWin = true
console.log(`Team A : ${teamA}`);
console.log(`Team A Points : ${teamAPoints}`);

// ============================= VARIABLES ================================


// ============================= CONDITIONAL ================================
// What is Conditional??
// A.K.A your...IF and ELSE statements.
// IF statement
var age = 25
if(age >= 21){
    console.log("You are allowed to enter.")
}else{
    console.log("You are NOT allowed to enter!")
}

// Write me a IF, Else If and else statement
// For a traffic light system
// If green, output is "You may go"
// If yellow, output is "You may go if you've crossed the line"
// If red, output is "STOP!"
const light = "Yellow"
if(light == "Green"){
    console.log("You may go!")
}else if(light == "Yellow"){
    console.log("You may go if you've crossed the line")
}else{
    console.log("STOP!")
}

// Ternary Operator
// Basically a true and false statement with a if condition
var points = 18
var message = points >= 21 ? "The game has ended" : "The game shall continue"
console.log(message)

// ============================= CONDITIONAL ================================

// ============================= LOOPS ================================
let lapsNeeded = 10
let ian = 0
for(let shakthy = 1; shakthy <= lapsNeeded; shakthy++){
    console.log(`Shakthy has run ${shakthy} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
}

// Rewrite the above loop with WHILE loop
let shakthy = 0
while(shakthy < lapsNeeded){
    console.log(`Shakthy has run ${shakthy + 1} laps`)
    shakthy++
    ian++
    console.log(`Ian has run ${ian} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
}

// ============================= LOOPS ================================

// ============================= FUNCTIONS ================================
function addTwoNumbers(num1, num2){
    console.log(`Total : ${num1 + num2}`)
}
addTwoNumbers(5, 6)

// Rewrite the above function, but change it to use a 'return' statement
// The purpose of the return function is to assign the value back to the function call.
// Function call is whenever you call the function.
function sumTotal(a, b){
    return a + b
}
console.log(sumTotal(5, 6))

// Now write a function that calculates the area of a rectangle
// Using a return statement to return the result, output with a console log
function totalArea(width, length){
    return width * length
}
console.log(totalArea(5, 6))

// Now write a function that calculates the perimeter of a rectangle
// Using a return statement to return the result, output with a console log
function totalPerimeter(w, l){
    return w * 2 + l * 2
}
console.log(totalPerimeter(5, 6))

// NEW FUNCTION JOIN IN -> (Arrow Function)
// You can use the round bracket and also curly brackets Just need a return within the function to work
// Use the area calculation as an example, then write a perimeter example
const totalArea1 = (width, length) => width * length
console.log(totalArea1(5,6))

// Given the example above, rewrite the total perimeter function with arrow function
const totalPerimeter1 = (w, l) => w * 2 + l * 2
console.log(totalPerimeter1(5, 6))

// ============================= FUNCTIONS ================================

// ============================= Arrays & Objects ================================
// This is an Array
// Using square brackets []
let phones = ['iphone', 'Nokia', 'Samsung', 'Vivo', 'Oppo', 'Pineapple 13 Pro Max by Nicholas', 'XiaoMi']
console.log(phones)

// Use a foreach loop for this array
phones.forEach((phone) => {
    console.log(phone)
})

// This is an Object
// Using curly brackets {}
let myProfile = {
    name: "Paul",
    age: 43,
    occupation: "Full-Stack Web Instructor",
    hobbies: ["Gaming", "Rock Climbing", "Coding"]
}
console.log(myProfile)

for(let key in myProfile){
    console.log(`${key}: ${myProfile[key]}`)
    console.log(key)
    console.log(myProfile[key])
}

// Modify the above, I only want to show the 2nd item when it comes to hobbies.
// HINT : It has something to do with If statement for this.
for(let key in myProfile){
    if(key == "hobbies"){
        console.log(`${key}: ${myProfile[key][1]}`)
    }else{
        console.log(`${key}: ${myProfile[key]}`)
    }
}

// Array of Objects
myProfile = {
    name: "Paul",
    age: 43,
    occupation: "Full-Stack Web Instructor",
    hobbies: ["Gaming", "Rock Climbing", "Coding"]
}
myFriendProfile = {
    name: "Will",
    age: 45,
    occupation: "Web Developer",
    hobbies: ["Sewing", "Crochet", "Coding"]
}
const meAndMyFriendProfile = [myProfile, myFriendProfile]
console.log(meAndMyFriendProfile)

const arrayOfAnimalObjects = [
    {
        name: "Boar",
        type: "Mammal",
        no_of_legs: 4
    },
    {
        name: "Hammerhead Shark",
        type: "Fish",
        no_of_legs: 0
    }
]

// Using 'push' array function, add a new animal to arrayOfAnimalObjects
// It has to be an object data type
// Use the round bracket and not the square bracket to 'push'
arrayOfAnimalObjects.push({
        name: "Lion",
        type: "Mammel",
        no_of_legs: 4
})
console.log(arrayOfAnimalObjects)

// Using a forEach loop, output the animals with the format below
// "My number 1 animal is {animal}, it is a {type} and it has {no_of_legs} number of legs"
arrayOfAnimalObjects.forEach((animal, index) => {
    console.log(`My number ${index + 1} animal is ${animal.name}, it is a ${animal.type} and it has ${animal.no_of_legs} number of legs.`)
})

// ============================= Arrays & Objects ================================