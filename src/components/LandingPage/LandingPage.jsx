import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.css"

function LandingPage() {
    return (
        <div className="landingContainer">
            <h1 className="a">Hello, portfolio</h1>
            <img className="landingIMG" src="https://media-s3-us-east-1.ceros.com/l3harris-sas/images/2021/07/13/e5fa0c60863cd9fa079296ce02e4d4c1/speed-lights-space-7cksx3j.gif"/>
            <button><Link to='/home'>Start</Link></button>
        </div>
    )
}

export default LandingPage;