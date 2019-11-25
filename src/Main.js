import React from "react"
import './css/App.scss';
import profile from './img/profile.jpg';
//import ReactDOM from "react-dom"

function Main(){
    return(
        <div className="App-main">
            <p>main</p>
            <div className="name">
                <p>Iain Mcilveen</p>
            </div>
            <div className="profile">
                <img src={profile} alt="nope" />
            </div>
        </div>
    );
}

export default Main;