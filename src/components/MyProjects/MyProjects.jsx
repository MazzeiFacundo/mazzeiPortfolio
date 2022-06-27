import React from "react";
import NavBar from "../NavBar/NavBar";
import "./MyProjects.css"
import clock from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/MyProjects/clock.gif"
import bragi from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/MyProjects/BragiIMG.png"
import codeScroll from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/MyProjects/codeScroll.gif"

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
                <img src={clock} className="insideDivIMGNotReady" alt = "none"></img>
                    <div className="projectTextContainer">
                        <div className="projectTitle">Coming Soon</div>
                        <div className="projectPreviewNotReady">Working on new projects!</div>
                        <div className="projectDescriptionNotReady">Come back soon to see my next project once it´s completed.</div>
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