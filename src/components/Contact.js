import React from "react"
import '../css/Contact.scss';

function Contact(){
    return(
        <div className="App-Contact">
            <scroll-container>
                <scroll-page id="Contact"></scroll-page>
            </scroll-container>
            BruhMoment
            <a href="https://github.com/IainMcilveen">Github</a>
            <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">Linkedin</a>
            <a href="./other/resume.pdf">Resume</a>
        </div>
    );
}

export default Contact;