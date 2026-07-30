// Rule #1 : ONLY call Hooks from React Function
// You've already used Hooks in your previous lessons and exercises
// Examples of React Hooks : -useState
// Examples of React Router Hooks : -useParams, useNavigate

// Examples of how to use useState hook :
import { useState } from "react" // Import Statement

function Hooks(){
    const [count, setCount] = useState(0) // Create a useState variable
    // The above is the correct way to use a React Hook
}

function notReactHook(){
    const [count, setCount] = useState(0) // NOT A VALID WAY TO USE useState variable
    // But Why is that?
    // Is this function considered a React function?
    // Because the function name DOES NOT start with an Uppercase letter
    // You couldn't use any React Hooks inside NON-REACT function
    // Meaning useState wouldn't work on this function :)
}

export default Hooks

// What makes a REACT Function Components
/* 
1. Capitalized naming : The first letter of the function name MUST BE a capitalized one
2. Return JSX : Must return HTML-like code to display
3. Can use Hooks : Able to use useState and all React Hooks
4. Triggered by Tags : Executed like HTML-like tags(actually XML)
5. Not Triggered by parenthesis : Not executed by using (), example DoSomething() VS <DoSomething />
*/

// Rule #2 : ONLY call Hooks at the TOP level
// const FunctionName = ({PROPS}) => {
//      functions
// }
const TopLevelOnly = ({condition}) => {
    // You cannot call React Hooks inside any nested block in the React Function
    // Meaning you can use IF or anything else that enclosed the Hooks
    if(condition){
        const [count, setCount] = useState(0); // THIS IS WRONG
    }
    // Only call it at the Top level
    const [count, setCount] = useState(0); // This is correct
}
// Obviously, you also cannot use React Hook outside of a React Function
const [count, setCount] = useState(0); // This will obviously gg.