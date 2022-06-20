import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ContactMe.css"
import linkedin from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/linkedin.png"
import github from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/github.png"
import gmail from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/gmail.png"
import sphere from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/esfera.gif"
function ContactMe() {
    return (
        <div className="contactContainer">
            <NavBar></NavBar>
            <div className="contactLogosAndTextContainer">
                <div className="sphereIMG">
                    <img src={sphere} />
                </div>
                <div className="contactLinkedInContainer">
                    <a className="linkLinkedIn" href="https://www.linkedin.com/in/facundomazzei/">
                        <img className="linkedInIMG" src={linkedin} />
                    </a>
                </div>
                <div className="contactGmailIMG">
                    <img className="gmailTrueIMG" src={gmail} />
                    <div className="contactGmailText">facundomazzeidev@gmail.com</div>
                </div>
                <div className="contactGitHubContainer">
                    <a className="linkGitHub" href="https://github.com/MazzeiFacundo">
                        <img className="contactGitHubIMG" src={github} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;