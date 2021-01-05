import React , { useState } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from "react-scroll";
import "../css/Navbar.scss";

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
            text: "About",
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
            text:"Photography",
            loc:"#Photography"
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
                <Link
                    activeClass="active"
                    to={options[i].loc}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                ><a className="navbar-link" href={options[i].loc}>{options[i].text}</a></Link>
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