import {createRoot} from "react-dom/client";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const root = createRoot(document.getElementById("root"));
const currentPath = window.location.pathname;

if(currentPath == "/home"){
    root.render(
        <Home/>
    )

}

else if(currentPath == "/about"){
    root.render(
        <About/>
    )
}

else if(currentPath == "/contact"){
    root.render(
        <Contact/>
    )
}
else{
    root.render(
        <h3>404 Error....Page Not Found</h3>
    )
}
