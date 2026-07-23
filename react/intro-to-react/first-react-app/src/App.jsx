// React method of importing images as variables
import chihuahuaimg from './assets/chihuahua.avif'

function App() {

  return(
    <>
      <h1>My First Customised React App</h1>
      <p>You can put whatever you want inside this React App inside here</p>
      {/* This is the React method of importing image and using it */}
      <img src={chihuahuaimg} alt="An Image of a chihuahua dog" />
      {/* And this is the normal image tag */}
      <img src="./assets/chihuahua.avif" alt="Alternate way to put image in" />
      {/* The difference between these two image tag is that you must remember the path is relative FROM index.html */}
      {/* That means you must link it assuming you are from index.html's root folder */}
      {/* That is why you see you need to add /src first before going into /assets */}
    </>
  )
}

export default App