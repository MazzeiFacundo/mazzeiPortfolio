import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ContactMe.css"

function ContactMe() {
    return (
        <div className="contactContainer">
            <NavBar></NavBar>
            <h1>Contact information and social media</h1>
            <div>Gmail</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
        </div>
    )
}

export default ContactMe;