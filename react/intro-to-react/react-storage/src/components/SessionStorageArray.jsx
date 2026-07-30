import { useState, useEffect } from "react";
const SessionStorageArrays = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        // If you wanna store an array sessionly in sessionStorage, you can't store it directly
        // You MUST convert it to JSON first, with JSON.stringfy
        const fruitArray = ["Apple", "Banana", "Orange"];
        // sessionStorage.setItem('fruits', fruitsArray) // <= WRONG WAY TO DO IT
        sessionStorage.setItem("fruits", JSON.stringify(fruitArray)); // <= WRONG TOO

        // Use JSON.parse to retrieve and decode from JSON
        const storedFruits = JSON.parse(sessionStorage.getItem("fruits"));
        setFruits(storedFruits)

        // IF you are curious, use console.log to see what is the JSON and what happens
        // After you have decode it with JSON.parse
        console.log("Raw Fruits from sessionStorage");
        console.log(typeof(sessionStorage.getItem("fruits")));
        console.log("After JSON.parse from sessionStorage");
        console.log(typeof(storedFruits));

        // Remove specific item
        sessionStorage.removeItem(fruits)
        console.log(sessionStorage.getItem("fruits")) // <= Will return Null since you removed it

        // Clear all items
        sessionStorage.clear()
    }, []);

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};

export default SessionStorageArrays;
