import React from "react"
import '../css/Welcome.scss';
import bgImg from "../img/background.jpg"


//import ReactDOM from "react-dom"

function Welcome(){
    return(
        <div className="App-Welcome">
            <img className="Welcome-Image" src={bgImg} />
            <div className="Welcome" >
                <h1>Welcome</h1>
                <h2>Iain Mcilveen's Portfolio Website</h2>
            </div>
                        
        </div>
    );
}

export default Welcome;