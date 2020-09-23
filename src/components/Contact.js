import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.scss';

function Contact(){
    const resumeIcon = <FontAwesomeIcon icon={faScroll} />
    const gitIcon = <FontAwesomeIcon icon={faGithub} />
    const linkedIcon = <FontAwesomeIcon icon={faLinkedin} />
    return(
        <div className="App-Contact">
            <scroll-container>
                <scroll-page id="Contact"></scroll-page>
            </scroll-container>
            <div className="Contact-Title">
                <h1>Find Me</h1>
            </div>
            <div className="Contact-Links">
                <a href="https://github.com/IainMcilveen">{gitIcon}</a>
                <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">{linkedIcon}</a>
                <a href="https://drive.google.com/file/d/1N4X2nW4AU7iz3Rvkeiz9tUw-KXMhcVPM/view?usp=sharing">{resumeIcon}</a>
            </div>
        </div>
    );
}

export default Contact;