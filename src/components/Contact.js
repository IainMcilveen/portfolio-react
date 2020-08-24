import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScroll,faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
            <h1>Find Me</h1>
            <a href="https://github.com/IainMcilveen">{gitIcon}</a>
            <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">{linkedIcon}</a>
            <a href="./other/resume.pdf">{resumeIcon}</a>
        </div>
    );
}

export default Contact;