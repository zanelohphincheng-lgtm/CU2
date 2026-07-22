import ReactComponent from "./ReactComponent";

function UsingReactComponent(){
    return(
        // <> and </> is called an empty tag
        <>
            <ReactComponent />
            <ReactComponent />
            <ReactComponent />
            <ReactComponent />
        </>
        // The reason why we use empty tag is because 
        // React can only return ONE parent element at a time
        // So we're using empty tag to wrap the child components together and return all at once
        // Basically the empty tag act as a big box that has all the child elements within it to be return all at once
    )
}

export default UsingReactComponent