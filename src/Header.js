import React from "react"
import './css/Header.scss';


//import ReactDOM from "react-dom"

function Header(){
    return(
        <div className="App-header">

            <div className="My-name">
                <div className="Name-text">
                    <h1>Iain Mcilveen</h1>
                    <h2>Aspiring Web Developer and Software Engineer</h2>
                </div>
            </div>
            <div className="My-links">
                <a href="https://github.com/IainMcilveen"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/"><i class="fa fa-linkedin"></i></a>
                <a href="./other/resume.pdf"><i class="fa fa-file"></i></a>
            </div>
            <div className="Next-button">
                <nav>
                    <a href="#About"><button>About</button></a>
                </nav>
                <scroll-container>
                    <scroll-page id="About"></scroll-page>
                </scroll-container>
            </div>
                        
        </div>
    );
}

export default Header;