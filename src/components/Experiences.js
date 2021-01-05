import React from "react"
import '../css/Experiences.scss';

function Experience(props){
    return(
        <div className={"Experience-Box" + (props.flip ? " flipped" : "")} key={props.index}>
            <div className="Experience-Info">
                <div className="Experience-Title">
                    <h2>{props.title}</h2>
                    <h4 id="subtitle">{props.subtitle}</h4>
                </div>
                <h4>{props.time}</h4>
                <p>{props.text}</p>
            </div>
            <div className="Experience-Image">
                <a href={props.link}><img src={props.pic} alt="Experience"></img></a>
            </div>
        </div>
    );
}


function Experiences(){
    
    let projectData = [
        {
            title: "Application Developer",
            subtitle: "Statistics Canada",
            time: "June 2020 - Present",
            text: "As a Application Developer I work on created and improving internal tools used by many different clients within Statistics Canada. This meant I had to be able to work with clients to create the programs to suit their needs.",
            pic: "https://cdn.discordapp.com/attachments/665849154186248202/747518688009257122/stat-can-new.png",
            link: "https://www.statcan.gc.ca/eng/start"
        },
        {
            title: "Computer Science Teaching Assistant",
            subtitle: "Carleton University: School of Computer Science",
            time: "September 2019 - December 2019",
            text: "As a teaching assistant I got to help students gain a better understanding of the fundemental concepts of programming. I held office hours, lead tutorials and work with a team of other teaching assistants to help students and complete marking of assignments in a timely manner.",
            pic: "https://cdn.discordapp.com/attachments/665849154186248202/747513262173585509/scs.png",
            link: "https://admissions.carleton.ca/programs/computer-science/"
        },
        {
            title: "B.S.C. Computer Science (Honours) ",
            subtitle: "Carleton University",
            time: "September 2018 - Present",
            text: "Currently studying Computer Science at Carleton University where I am learning about a wide range of computer science related topics such as: Systems Programming, Software engineering, Wev developement as well as many others.",
            pic: "https://cdn.discordapp.com/attachments/665849154186248202/747507324804923543/carleton-university-vector-logo.png",
            link: "https://carleton.ca/"
        }
    ];

    let experiences = [];
    let flip = false;
    projectData.forEach((ele,index) => {
        experiences.push(<Experience title={ele.title} subtitle={ele.subtitle} time={ele.time} text={ele.text} pic={ele.pic} link={ele.link} flip={flip} key={index} />);
        flip = !flip;
    });
    
    
    return(
        <div className="App-Experiences" id="#Experiences">
            <div className="Experiences-Title">
                <h1>My Experiences</h1>
            </div>
            {experiences}
        </div>
    );
}

export default Experiences;