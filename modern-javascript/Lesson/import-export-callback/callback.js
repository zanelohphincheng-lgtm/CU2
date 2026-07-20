// The 'callback' variable CAN act as a function
function greet(callback){
    console.log("Hello")
    // Over here, it's calling the argument as a function
    callback(console.log("Hello again!")) // As same as a function
}

// Notice there's a function INSIDE the 'greet' function call
// And this works without a name for the function
// Basically it's calling another function INSIDE a function
greet(function (){
    console.log("John Doe")
})

// NO CALLBACK
// The argument is 'name'
function noCallBackGreeting(name){
    // Over here, you are using 'name' as a variable string
    // To pass it into console.log
    console.log(`My name is ${name}`)
}

noCallBackGreeting("Paul") // This can be think as a "Fill in the blank" functionality

// I want a function that does addition first, then squares the result and lastly console logs the squared results
const calculateSum = (num1, num2, squareFunction) => {
    const sum = num1 + num2
    squareFunction(sum)
}

calculateSum(5, 3, (result) => {
    console.log(result ** 2); // Output: 64
});

// Second Way
const squareAndLog = (number) => {
    console.log(number ** 2)
}

calculateSum(5, 3, squareAndLog)

// Example for Recursive Function
const addItselfUntilMoreThan100 = (number) => {
    const result = number + number
    if(result < 100){
        addItselfUntilMoreThan100(result)
    }else{
        console.log(result)
    }
}

addItselfUntilMoreThan100(1)
// It plus it's own number until it's more than 100

// New Guy here : Asynchronous Callbacks
// To understand Asynchronous, you have to first understand Synchronous
// Asynchronous -> Means a background process that syncs with the timing that the HUD is being present

function dummyDownload(url, callback){
    // As if you are downloading actual data
    console.log("Downloading data...")
    // To simulate the download
    setTimeout(() => {
        console.log(`Downloaded Data from ${url}`)
        // Once the 'download' is complete, use callback function to process the data
        callback()
    }, 2000) // counting from 2000 miliseconds, meaning 2 seconds as a timer
}

dummyDownload('https://google.com', function process(){
    console.log("Now I am processing the data")
})