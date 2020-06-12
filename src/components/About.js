import React from "react"
import '../css/About.scss';
import profile from '../img/profile.jpg';

function About(){
    return(
        <div className="App-main">
            <scroll-container>
                <scroll-page id="About"></scroll-page>
            </scroll-container>
            <div className="profile">
                <img src={profile} alt="nope" />
            </div>
            <div className="intro">
                <div className="introText">
                    <h2>About Me</h2>
                    <p>Hi, I'm Iain. I am an aspiring software developer and full time student in third year at Carleton University studying computer science. I am passionate about all things computer science and enjoy learning new things.</p>
                </div>
            </div>
        </div>
    );
}

export default About;