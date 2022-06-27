import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Summary.css"
import me from "./me.jpg"
import scroll from "./scroll.gif"
import linkedin from "./linked.png"

function Summary() {
    return (
        <div className="allContainerSummary">
            <NavBar></NavBar>
            <div className="summarySplitContainer">
                <img className="scrollIMG" src={scroll} alt = "none"></img>
                <div className="leftDiv">
                    <img className="meIMG" src={me} alt = "none"></img>

                    <div className="summaryTitle">Summary
                        <div className="summaryText">
                            Hello! My name is Facundo, I am a Full Stack web developer with knowledge and experience in business, disciplined, willing to learn from my colleagues and looking for new challenges.
                        </div>
                    </div>

                    <div className="summaryTitle">Cell phone
                        <div className="summaryText">
                            +54 3329 394357
                        </div>
                    </div>

                    <div className="summaryTitle">Address
                        <div className="summaryText">
                            San Pedro, Provincia de Buenos Aires, Argentina.
                        </div>
                    </div>
                        <div className="smallLinkedIn">
                            <a className="smallLinkLinkedIn" href="https://www.linkedin.com/in/facundomazzei/">
                                <img className="smallLinkedInIMG" src={linkedin} alt = "none"/>
                            </a>
                        </div>

                    <div className="summaryTitleEmail">E-mail
                        <div className="summaryTextEmail">
                            facundomazzeidev@gmail.com
                        </div>
                    </div>
                </div>
                <div className="rightDiv">
                    <div className="titleSummary">Facundo Mazzei</div>
                    <div className="subTitleSummary">
                        Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML
                    </div>
                    <div className="summaryTitleRight">Experience with technologies:
                        <div className="summarySubTitleRight">Bragi | Private project
                            <div className="summaryTextSubTitle"> Role:
                                <div className="summaryTextInput">
                                    Full Stack Developer
                                </div>
                                <div className="summaryTextSubTitle">
                                    Used technologies:
                                </div>
                                <div className="summaryTextInput">
                                    Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML
                                </div>
                            </div>
                        </div>
                        <div className="summarySubTitleRight">HENRY | Academic project.
                            <div className="summaryTextSubTitle"> Role:
                                <div className="summaryTextInput">
                                    Full Stack Developer
                                </div>
                                <div className="summaryTextSubTitle">
                                    Used technologies:
                                </div>
                                <div className="summaryTextInput">
                                    Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="summaryTitleRight">Academic record:
                        <div className="summarySubTitleRight">HENRY Web Course | Graduated
                            <div className="summaryTextSubTitle"> Technologies learned:
                                <div className="summaryTextInput">
                                    Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML
                                </div>
                            </div>
                        </div>
                        <div className="summaryTextSubTitle">Learning time and practical use of technologies studied:
                            <div className="summaryTextInput">
                                +800 Hours
                            </div>
                            <div className="summaryTextInput">
                                Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML
                            </div>
                        </div>
                    </div>
                    <div className="summaryTitleRight">Languages:
                        <div className="summaryTextInputLanguage">English:
                            <div className="summaryTextInput"> EF SET English Certificate 78/100 (C2 Proficient)
                            </div>
                        </div>
                        <div className="summaryTextInputLanguage">Spanish:
                            <div className="summaryTextInput"> Native
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Summary;