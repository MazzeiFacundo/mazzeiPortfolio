import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ContactMe.css"
import linkedin from "./linked.png"
import github from "./github.png"
import gmail from "./gmail.png"
import sphere from "./esfera.gif"
function ContactMe() {
    return (
        <div className="contactContainer">
            <NavBar></NavBar>
            <div className="sphereIMG">
                    <img src={sphere} alt = "none"/>
                </div>
            <div className="contactLogosAndTextContainer">
                
                <div className="contactLinkedInContainer">
                    <a className="linkLinkedIn" href="https://www.linkedin.com/in/facundomazzei/">
                        <img className="linkedInIMG" src={linkedin} alt = "none" />
                    </a>
                </div>
                <div className="contactGmailIMG">
                    <img className="gmailTrueIMG" src={gmail} alt = "none" />
                    <div className="contactGmailText">facundomazzeidev@gmail.com</div>
                </div>
                <div className="contactGitHubContainer">
                    <a className="linkGitHub" href="https://github.com/MazzeiFacundo">
                        <img className="contactGitHubIMG" src={github} alt = "none" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;