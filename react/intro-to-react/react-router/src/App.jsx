// Create your routes
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Navigation from "./component/Navigation";
import BlogPost from "./component/BlogPost";
import Comments from "./component/Comments";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Navigation/>   
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />}>
                    {/* Not closing the route here to have another route inside it as a nested component */}
                    <Route path="comments" element={<Comments/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
In this lesson you learnt 5 things

1. Basic routing (with Blog and About and Home page)
2. Navigation with NavLink and Link with active state styling (check App.css)
3. Dynamic routes with URL Parameter (/blog/:id)
4. Nested Routes with Nested Component (Display Comments in Blog Post page)
5. Programmatically Navigate with useNavigate hook
*/