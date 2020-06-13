import React from "react"
import '../css/Projects.scss';

function Projects(){
    return(
        <div className="App-Projects">
            <scroll-container>
                <scroll-page id="Projects"></scroll-page>
            </scroll-container>
            <div className="Projects-Title">
                <h1>My Projects</h1>
            </div>
            Projects
        </div>    
    );
}

export default Projects;