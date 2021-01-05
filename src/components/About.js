import React from "react"
import '../css/About.scss';
import profile from '../img/profile.jpg';

function About(){
    return(
        <div className="App-main" id="#About">
            <div className="About">
                <div className="profile">
                    <img src={profile} alt="nope" />
                </div>
                <div className="intro">
                    <div className="introText">
                        <h1>Hi! I'm Iain</h1>
                        <hr/>
                        <p>I am an aspiring software developer and full time student in third year at Carleton University studying computer science. I am passionate about all things computer science and enjoy learning new things.</p>
                        <p>I'm currently seeking a Fall 2021 internship!</p>
                    </div>
                    <div className="resume">
                        <a href="https://drive.google.com/file/d/1aODtJdvs33xWQ53bfHTvPEmT3m5FiXiY/view?usp=sharing">Resume</a>
                        <a href="https://github.com/IainMcilveen">GitHub</a>
                        <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;