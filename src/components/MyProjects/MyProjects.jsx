import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./MyProjects.css"

function MyProjects() {
    return (
        <div className="allProjectsContainer">
            <NavBar></NavBar>
            <div className="projectsContainer">
                <div className="bragiDiv">
                    <img src="https://i.imgur.com/4UBgUvv.png" className="insideDivIMG"></img>
                    <div>a</div>
                </div>
                <div className="comingSoonDiv">
                    <img src="http://zetsoft.uz/images/default-image.png" className="insideDivIMG"></img>
                    <div>a</div>
                </div>
                <div className="comingSoonDiv1">
                    <img src="http://zetsoft.uz/images/default-image.png" className="insideDivIMG"></img>
                    <div>a</div>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;