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
            <div className="name">
                <p>Iain Mcilveen</p>
            </div>
        </div>
    );
}

export default Main;