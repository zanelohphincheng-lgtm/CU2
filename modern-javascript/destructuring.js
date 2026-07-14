// Destructuring Objects
// FYI It will be out on you KA exam :)
// You can destructure objects into smaller parts (individual variables)
// By using the Destructuring Assignment Operator

// WITHOUT Destructuring
const user = {
    name: 'John Doe',
    age: 28
}

const name = user.name
const age = user.age

console.log(name) // John Doe
console.log(age)  // 28

// WITH Destructuring
const anotherUser = {
    anotherName: 'Han Chuan',
    anotherAge: 25
}
const { anotherName, anotherAge } = anotherUser // "We're destructing more than one value with only one line!"
// Bagus :)

console.log(anotherName) // Han Chuan
console.log(anotherAge)  // 25

// Basically, it's a fancy way to extracting values into individual variables. 
const student = {
    studentName: 'alicia',
    studentAge: 18,
    studentGrade: 'Diploma'
}
// Destucture the above data and output their values
const { studentName, studentAge, studentGrade } = student // Destruction Process
// Display values
console.log(studentName)
console.log(studentAge)
console.log(studentGrade)

// Destructuring a Nested Object
const player = {
    playerName: 'Lee Sang-Hyeok',
    playerAge: 30,
    playerGame: 'L.O.L.',
    playerTeam: {
        teamName: 'T1',
        teamPosition: 'Mid Laner'
    }
}
//                                         I'm here!!!(Destructure the nested object)
const { playerName, playerAge, playerGame, playerTeam: { teamName, teamPosition } } = player

console.log(teamName)
console.log(teamPosition)

// Destructuring ARRAYS
const colors = ['red', 'green', 'yellow']
const [firstColor, secondColor, thirdColor] = colors

console.log(firstColor)  // red
console.log(secondColor) // green
console.log(thirdColor)  // yellow

// You can put any name for the destruction process
const [A, B, C] = colors

console.log(A) // red
console.log(B) // green
console.log(C) // yellow

// You can skip a position in an array by leaving it BLANK
const [meFirst, , whereIsTheSecondOne] = colors
console.log(meFirst) // red
//No Green ( T - T )
console.log(whereIsTheSecondOne) // yellow

// Destructuring Function Parameters

// WITHOUT DESTRUCTURING FUNCTION PARAMETERS
function greetPerson(person){
    console.log(`Hello, ${person.personName}. You are ${person.personAge} years old!`)
}

const person = {
    personName: 'MingZhi',
    personAge: 18
}

greetPerson(person)

// WITH DESTRUCTURING FUNCTION PARAMETERS
// You destructure directly inside the argument "({ personName, personAge })"
function destructureGreetPerson({ personName, personAge }){
    console.log(`Hello, ${personName}. You are ${personAge} years old!`)
}

destructureGreetPerson(person)

// Default Values with Destructuring
// Using the 'person' object as an example, we can destructure and if there is a field with no actual value 
// from original object
// It's possible to give it a default value like this (profession = 'student')
// or it will just be 'undefined'
const { personName, personAge, profession = 'student' } = person
console.log(personName) // MingZhi
console.log(personAge)  // 18
console.log(profession) // 'student' as the default value

// Default Values for Array Destructuring
const fruits = ['apple', 'orange']
const [firstFruit, secondFruit, thirdFruit = 'strawberry'] = fruits

console.log(firstFruit)  // apple
console.log(secondFruit) // orange
console.log(thirdFruit)  // 'strawberry'as the default value