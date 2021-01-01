import React from 'react';
import '../css/Photography.scss'

function Photo(props){
    return(
        <div className="Photo-Box">
            <img src={props.img} alt="oops" />
        </div>
    );
}

function Photography(){

    let photoData = [{
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298932721090590/IMG_0039.jpg"
    },
    {
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298947744169994/IMG_0251.jpg"
    },
    {
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298962914836500/IMG_8236.jpg"
    },
    {
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298982876184613/IMG_9056.jpg"
    },
    {
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298987108368394/IMG_8620.jpg"
    },
    {
        img: "https://cdn.discordapp.com/attachments/665849154186248202/794298994523897856/IMG_9138.jpg"
    }];

    let photos = [];
    photoData.forEach((ele,key) => {
        photos.push(<Photo img={ele.img} key={key}/>)
    });

    return(
        <div className="App-Photography">
            <scroll-container>
                <scroll-page id="Photography"></scroll-page>
            </scroll-container>
            <div className="Photography-Header">
                <h1>My Photography</h1>
                <p>In my spare time I enjoy going out and taking pictures of the various places around me. It is a good way to relax and gets me to go outside and enjoy some of the great scenery around where ever I am at the time.</p>
            </div>
            <div className="Photography-photos">
                {photos}
            </div>
        </div>
    );
}

export default Photography;