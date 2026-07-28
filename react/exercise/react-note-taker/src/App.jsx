// Create your routes
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./Navigation";
import Home from "./Home";
import AddNotes from "./AddNotes";
import Categories from "./Categories";
import EditNote from "./EditNote";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Navigation/>   
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addnote" element={<AddNotes />} />
                <Route path="/n/:id" element={<EditNote />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;