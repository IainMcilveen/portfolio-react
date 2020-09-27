import React from "react"
import '../css/Projects.scss';

function Project(props){
    return(
        <div className="Project-Box">
            <div className="Project-Image">
                <a href={props.url}> <img src={props.img} alt="project" /></a>
            </div>
            <div className="Project-Title">
                <a href={props.url}><h4>{props.title}</h4></a>
                <h6>{props.desc}</h6>
                <p><b>{props.date}</b></p>
            </div>
            <div className="Project-Info">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

function Projects(){

    let projectData = [{
        url: "https://github.com/IainMcilveen/portfolio-react",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754843218356731954/unknown.png",
        title: "React Portfolio",
        desc: "Web Application",
        date: "September 2020",
        text: "This is my portfolio website written using React and Sass styling used to demonstrate my current projects, skills and experience. I made use of React Hooks to save states such as if the person viewing the side has the nav bar hidden or not."
    },
    {
        url: "https://github.com/IainMcilveen/pathfinding-visualizer",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754846093556187216/pathfinding-vis-gif.gif",
        title: "Pathfinding visualizer",
        desc: "Algorithms",
        date: "July 2020",
        text: "I wrote this application as a way to visualize the A star pathfinding algorithm, allowing the user to create different obstacles and set a start and end point for the algorithm to use. It was written in python using pygame to display the graphics."
    },
    {
        url: "https://github.com/IainMcilveen/Whos-That-Pokemon",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754850059824267344/unknown.png",
        title: "Who's That Pokemon",
        desc: "Mobile Web Application",
        date: "January 2020",
        text: "This is a program written for the CUHacking 2020 hackathon, this is a web application written in React which is designed to work well on mobile devices. I made use of the Hooks API to save the quiz state and determine whether the user answered correctly or incorrectly."
    },
    {
        url: "https://github.com/IainMcilveen/comp3005pg",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754853854108975244/unknown.png",
        title: "COMP 3005 Database Project",
        desc: "Web Application",
        date: "April 2020",
        text: "This program is my final project for COMP 3005, it is a web application designed to be the platform for a online book store. I made use of postgreSQL to store book and order information, and nodeJS for the backend. For the frontend, I made use of Pug for the templates which pull information from the database."
    },
    {
        url: "https://github.com/IainMcilveen/GridWorld",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/758103143606386688/gridworld.gif",
        title: "Grid World",
        desc: "Game",
        date: "October 2019",
        text: "This is a in-progess game being written from scratch in Java using AWT, currently the player can walk around and explore the world and can naviagate to different procedurally generated screens."
    }
    ]

    let projects = [];
    projectData.forEach((ele,index) => {
        projects.push(<Project url={ele.url} img={ele.img} title={ele.title} desc={ele.desc} date={ele.date} text={ele.text} key={index} />);
    });

    return(
        <div className="App-Projects">
            <scroll-container>
                <scroll-page id="Projects"></scroll-page>
            </scroll-container>
            <div className="Projects-Title">
                <h1>My Projects</h1>
            </div>
            <div className="Projects-All">
                {projects}
            </div>
        </div>    
    );
}

export default Projects;