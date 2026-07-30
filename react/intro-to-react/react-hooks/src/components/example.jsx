import { useState, useEffect } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    const [oneMoreCount, setOneMoreCount] = useState(0);

    // Alternatively they called useEffect as "Side Effects"
    useEffect(() => { // Basically runs this code whenever the useState variable has changed
        // Update the document title
        document.title = `You clicked me ${count} times`
        // This code above changes the document title and sync with the {count}

        console.log(`You clicked me ${count} times`)
        // This code above is what we call a "No Dependency Array"
        // Meaning it runs every time ANY useState variable detected changes
    }) // <= NOTICE that there's no square bracket(Dependency Array)?
    // Basically it will console.log no matter it's count, anotherCount, oneMoreCount. IT WILL RERUN AGAIN AND AGAIN AND AGAIN for 28 stab wounds on your web
    // So we mostly avoid using such method and have a dependency array :)

    useEffect(() => {
        console.log("I am only detecting changes for count variable")
        console.log(`Count was clicked ${count} times`)
    }, [count]) // <= That right there is your "Dependency Array", in other words You are telling this function to only focus on [count] changes
    // Wrap it in a square brackets as if it's an Array

    useEffect(() => {
        console.log("This useEffect will ONLY run on the first load")
        console.log("No matter what variable changes, you will not see me again!")
    }, []) // <= Putting an EMPTY dependency array after the curly brackets
    // ALSO REMEMBER 
    // THE DAMN COMMA BETWEEN THE CURLY BRACKETS{} AND THE SQUARE ARRAY BRACKETS[]
    // Also FYI useEffect is a data storage
    // And in this case basically it's like onPageLoad, rendering the data for that page only and not load data for other pages

    useEffect(() => {
        console.log("This useEffect will only run IF")
        console.log("count, or oneMoreCount detected any changes")
        console.log("Basically a useEffect can detect more than one useState variable change in the dependency array")
    }, [count, oneMoreCount]) // <= Putting count and oneMoreCount
    // In the dependency array to detect changes from both of them(count, oneMoreCount)

    return (
        <div className="d-flex justify-content-center">
            <p>You Clicked {count} Times</p>
            <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
                CLICK ME
            </button>
            <p>You Clicked The Other {anotherCount} Times</p>
            <button className="btn btn-primary ml-3" onClick={() => setAnotherCount(anotherCount + 1)}>
                ANOTHER CLICK ME
            </button>
            <p>You Clicked One More Count {oneMoreCount} Times</p>
            <button className="btn btn-primary ml-3" onClick={() => setOneMoreCount(oneMoreCount + 1)}>
                ONE MORE CLICK ME
            </button>
        </div>
    );
};

export default Example;
