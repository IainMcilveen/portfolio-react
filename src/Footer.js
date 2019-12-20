import React from "react"
import './css/App.scss';
//import ReactDOM from "react-dom"

function Footer(){
    return(
        <div className="links">
            <a href="https://github.com/IainMcilveen">Github</a>
            <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">Linkedin</a>
            <a href="./other/resume.pdf">Resume</a>
        </div>
    );
}

/*
<a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/"><i class="fa fa-linkedin"></i></a>
<a href="./resume.pdf"><i class="fa fa-file"></i></a>
*/

export default Footer;
