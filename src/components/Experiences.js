import React from "react"
import '../css/Experiences.scss';

function Experiences(){
    
    let projectData = [
        {
            title: "title 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            pic: "https://i1.sndcdn.com/artworks-000479787321-enu4ls-t500x500.jpg",
            link: "https://github.com/IainMcilveen/portfolio-react"
        },
        {
            title: "title 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc vel. Sed vulputate mi sit amet mauris commodo quis imperdiet.",
            pic: "https://store-images.s-microsoft.com/image/apps.608.13510798887677013.5c7792f0-b887-4250-8c4e-4617af9c4509.bcd1385a-ad15-450c-9ddd-3ee80c37121a",
            link: "https://github.com/IainMcilveen/portfolio-react"
        },
        {
            title: "title 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor.",
            pic: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
            link: "https://github.com/IainMcilveen/portfolio-react"
        }
    ];
    
    
    return(
        <div className="App-Experiences">
            <scroll-container>
                <scroll-page id="Experiences"></scroll-page>
            </scroll-container>
        </div>
    );
}

export default Experiences;