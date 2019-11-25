import React from "react"
import './css/App.scss';
import profile from './img/profile.jpg';
//import ReactDOM from "react-dom"

function Main(){
    return(
        <div className="App-main">
            <div className="profile">
                <img src={profile} alt="nope" />
            </div>
            <div className="intro">
                <div className="introText">
                    <h2>Iain Mcilveen</h2>
                    <p>Hi, I'm Iain. I am a student in second year at Carleton University studying computer science.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;