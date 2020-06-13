import React , { useState } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import "../css/Navbar.scss"

function Navbar(){

    const [hoverIndex,setHoverIndex] = useState(-1);
    const [navHidden,setNavHidden] = useState(false);
    const [navTran,setNavTran] = useState(false);

    useScrollPosition(({ currPos }) => {
        if(currPos.y < -140){
            setNavTran(true);
        }else{
            setNavTran(false);
        }
    });

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
            <li className="navbar-element" key={i}
                onMouseEnter={ () => setHoverIndex(i)}
                onMouseLeave={ () => setHoverIndex(-1)}
                style={{"backgroundColor": (hoverIndex === i ? '#323742' : "") }}
            >
                <a className="navbar-link" href={options[i].loc}>{options[i].text}</a>
            </li>
        )
    }

    
    return(
        <nav className={(navHidden ? "navbar-hidden " : "") +  (navTran ? "navbar-transparent" : "")}>
            <ul className="navbar-list">
                <figure onMouseDown={ () => setNavHidden(!navHidden)}>
                    <i className={navHidden ? "hidden" : "visible"}></i>
                </figure>
                {links}
            </ul>

        </nav>
    );
}

export default Navbar;