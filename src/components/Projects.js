import React from "react"
import '../css/Projects.scss';

function Project(props){
    return(
        <div className="Project-Box">
            <div className="Project-Image">
                <img src={props.img} alt="project" />
            </div>
            <div className="Project-Title">
                <h5>{props.title}</h5>
            </div>
            <div className="Project-Desc">
                <h6>{props.desc}</h6>
            </div>
            <div className="Project-Info">
                <p>{props.date}</p>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

function Projects(){

    let projectData = [{
        img: "https://pbs.twimg.com/profile_images/1214652431440711681/A1GTURjj_400x400.jpg",
        title: "Bruh Moment",
        desc: "Web Application",
        date: "March 2020 - Present",
        text: "This is supposed to be a paragraph about the project"
    },{
        img: "https://pbs.twimg.com/profile_images/1214652431440711681/A1GTURjj_400x400.jpg",
        title: "Bruh Moment",
        desc: "Web Application",
        date: "March 2020 - Present",
        text: "This is supposed to be a paragraph about the project"
    }];

    let projects = [];
    projectData.forEach((ele,index) => {
        projects.push(<Project img={ele.img} title={ele.title} desc={ele.desc} date={ele.date} text={ele.text} key={index} />);
    });

    return(
        <div className="App-Projects">
            <scroll-container>
                <scroll-page id="Projects"></scroll-page>
            </scroll-container>
            <div className="Projects-Title">
                <h1>My Projects</h1>
            </div>
            {projects}
        </div>    
    );
}

export default Projects;