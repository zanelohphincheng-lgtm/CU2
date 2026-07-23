// Arrow function syntax

// Normal Function Format
// function functionName(){

// }

// Arrow Function
// const functionName = () => {}
import { useState } from "react"
const AnimalsList = () => {
    const [animals, setAnimals] = useState([])
    const[animalEntry, setAnimalEntry] = useState("")

    // Function to add animal into list
    const addAnimal = () => {
        console.log(animalEntry)
        setAnimals([...animals, animalEntry])
        setAnimalEntry("")
    }

    return(
        <>
            <ul>
                {/* Display all the animals using the .map() method */}
                {animals.map((animalEntry, key) => (
                    <li key={key}>{animalEntry}</li>
                ))}
            </ul>
            {/* The input text box */}
            <input type="text" value={animalEntry} onChange={(event) => setAnimalEntry(event.target.value)} />
            {/* A button to add animal to the list */}
            <button onClick={addAnimal}>Add Animal</button>
        </>
    )
}

export default AnimalsList