import React from "react"
import "../css/Navbar.scss"

function Navbar(){
    
    return(
        <nav class="navbar">
            <ul class="navbar-list">
                <li class="navbar-element">
                    <a class="navbar-link" href="#About">About Me</a>
                </li>
                <li class="navbar-element">
                    <a class="navbar-link" href="#Experiences">Experiences</a>
                </li>
                <li class="navbar-element">
                    <a class="navbar-link" href="#Projects">Projects</a>
                </li>
                <li class="navbar-element">
                    <a class="navbar-link" href="#Contact">Contact</a>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;