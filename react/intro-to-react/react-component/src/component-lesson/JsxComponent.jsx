function JsxComponent(){
    // This is an example of a JSX Component
    // Variables that act as the html tags
    const element = <h1>This is a JSX Component</h1>
    const anotherElement = <p>This is another JSX Component</p>

    // const combinedElement = element + anotherElement 
    // This way will render you [object Object][object Object]

    // THIS THE THE REAL WAY TO DO IT
    const combinedElement = ( // ROUND BRACKETS
        <>
        {element} 
        {anotherElement}
        </>
    )

    // You just use "return" to render the JSX Component
    return combinedElement
    
    // Question : Can you write another component, combine it with the 'element' component, and then render it?

}

export default JsxComponent