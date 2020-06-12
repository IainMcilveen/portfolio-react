import React , { useState } from "react"
import "../css/Navbar.scss"

function Navbar(){

    const [hoverIndex,setHoverIndex] = useState(-1);
    const [navHidden,setNavHidden] = useState(false);

    let options = [
        {
            text: "About Me",
            loc: "#About"
        },
        {
            text: "Experiences",
            loc: "#Experiences"
        },
        {
            text: "Projects",
            loc: "#Projects"
        },
        {
            text:"Contact",
            loc:"#Contact"
        }]; 
    let links = [];


    for(let i = 0; i < options.length; i++){
        links.push(
            <li class="navbar-element"
                onMouseEnter={ () => setHoverIndex(i)}
                onMouseLeave={ () => setHoverIndex(-1)}
                style={{"background-color": (hoverIndex === i ? '#323742' : "") }}
            >
                <a class="navbar-link" href={options[i].loc}>{options[i].text}</a>
            </li>
        )
    }

    
    return(
        <nav class="navbar">
            <ul class="navbar-list">
                {links}
            </ul>

        </nav>
    );
}

export default Navbar;