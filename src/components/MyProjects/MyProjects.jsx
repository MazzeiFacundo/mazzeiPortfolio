import React from "react";
import NavBar from "../NavBar/NavBar";
import "./MyProjects.css"
import clock from "./clock.gif"
import bragi from "./BragiIMG.png"
import codeScroll from "./codeScroll.gif"
import reactImg from "./react-redux.png"

function MyProjects() {
    return (
        <div className="allProjectsContainer">
            <NavBar></NavBar>
            <img src={codeScroll} className="dummyIMG" alt = "none"></img>
            <div className="projectsContainer">
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
                <div className="projectDiv">
                    <img src={clock} className="insideDivIMGNotReady" alt = "none"></img>
                    <div className="projectTextContainer">
                        <div className="projectTitle">Coming Soon</div>
                        <div className="projectPreviewNotReady">Working on new projects!</div>
                        <div className="projectDescriptionNotReady">Come back soon to see my next project once it´s completed.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;