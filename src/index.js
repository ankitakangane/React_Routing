import {createRoot} from "react-dom/client";
import "./index.css";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";

const root = createRoot(document.getElementById("root"));
const currentPath = window.location.pathname;

if(currentPath == "/"){
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
