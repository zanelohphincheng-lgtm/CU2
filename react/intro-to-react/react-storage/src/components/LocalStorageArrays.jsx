import { useState, useEffect } from "react";
const LocalStorageArrays = () => {
    const [fruits, setFruits] = useState([]);
    useEffect(() => {
        // If you wanna store an array locally in localStorage, you can't store it directly
        // You MUST convert it to JSON first, with JSON.stringfy
        const fruitArray = ["Apple", "Banana", "Orange"];
        // localStorage.setItem('fruits', fruitsArray) // <= WRONG WAY TO DO IT
        localStorage.setItem("fruits", JSON.stringify(fruitArray)); // <= WRONG TOO

        // Use JSON.parse to retrieve and decode from JSON
        const storedFruits = JSON.parse(localStorage.getItem("fruits"));
        setFruits(storedFruits)

        // IF you are curious, use console.log to see what is the JSON and what happens
        // After you have decode it with JSON.parse
        console.log("Raw Fruits from localStorage");
        console.log(typeof(localStorage.getItem("fruits")));
        console.log("After JSON.parse from localStorage");
        console.log(typeof(storedFruits));

        // Remove specific item
        localStorage.removeItem(fruits)
        console.log(localStorage.getItem("fruits")) // <= Will return Null since you removed it

        // Clear all items
        localStorage.clear()
    }, []);

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};

export default LocalStorageArrays;
