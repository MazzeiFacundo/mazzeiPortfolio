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
            <div className="contactImgContainer">
            <img className="contactIMGBackground" src="https://www.kldperu.com/wp-content/uploads/2020/07/icono-SR-blanco.png"/>
            </div>
            <div className="contactLogosAndTextContainer">
                {/* <div>
                    <img className="contactlogos" src={linkedin} />
                </div>
                <div>
                    <img className="contactlogos" src={gmail} />
                </div>
                <div>
                    <img className="contactlogos" src={github} />
                </div> */}
            </div>
        </div>
    )
}

export default ContactMe;