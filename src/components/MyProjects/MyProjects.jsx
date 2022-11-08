import React from "react";
import NavBar from "../NavBar/NavBar";
import "./MyProjects.css"
import clock from "./clock.gif"
import bragi from "./BragiIMG.png"
import codeScroll from "./codeScroll.gif"
import reactImg from "./react-redux.png"
import inco from "./inco.png"

function MyProjects() {
    return (
        <div className="allProjectsContainer">
            <NavBar></NavBar>
            <img src={codeScroll} className="dummyIMG" alt = "none"></img>
            <div className="projectsContainer">
            <div className="projectDiv">
                    <img src={inco} className="insideDivIMGNotReady" alt = "none"></img>
                    <div className="projectTextContainer">
                        <div className="projectTitle">Inco Real State</div>
                        <div className="projectPreview">A real state website for everyone!</div>
                        <div className="projectDescription">
                            Inco allows you to create an account and list your real state, for sale, rent or touristic rent, you can also upload a gallery of images to advertise your property.
                        </div>
                        <a className="projectDescriptionLink" href="https://inco-client.vercel.app">Click here to visit the project!</a>
                    </div>
                </div>
                <div className="projectDiv">
                    <img src={bragi} className="insideDivIMG" alt = "none"></img>
                    <div className="projectTextContainer">
                        <div className="projectTitle">Bragi</div>
                        <div className="projectPreview">A music oriented social media</div>
                        <div className="projectDescription">The Bragi App connects artists with his fans through music-oriented posts. You can follow your favourite artists, see their posts in real time, and like them.</div>
                        <a className="projectDescriptionLink" href="https://bragi-nine.vercel.app/">Click here to visit the project!</a>
                    </div>
                </div>
                <div className="projectDiv">
                <img src={reactImg} className="insideDivIMGInverter" alt = "none"></img>
                    <div className="projectTextContainer">
                        <div className="projectTitle">Text inverter</div>
                        <div className="projectPreview">Text inverter with Redux!</div>
                        <div className="projectDescription">Type something to invert it and check if the word is a palindrome</div>
                        <a className="projectDescriptionLink" href="https://cwr-facundo-mazzei-f.herokuapp.com/">Click here to visit the project!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;