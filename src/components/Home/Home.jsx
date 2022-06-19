import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import NavBar from "../NavBar/NavBar";
import styles from "./Home.css"
import moon from "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/kisspng-moon-cartoon-black-and-white-white-moon-5a8ea6beaeb4a9.4775455615192982387156.png"
import stars from  "C:/Users/facum/Facu Programacion/PI-Videogames-main/client/src/components/5a28b33e6db3e9.9753794715126167664494.png"

function Home() {
    const dispatch = useDispatch()
    return (
        <div className="homeContainer">
            <NavBar></NavBar>
            <div className="textContainerHome">
            <h1 className="nameTitleHome">Mazzei Facundo</h1>
            <p className="underNamePHome1">Full Stack Web Developer </p>
            <p className="underNamePHome2">Javascript / ReactJs / NodeJs / Sequelize / SQL / CSS / HTML</p>
            <p className="underNamePHome3">Welcome to my portfolio</p>
            <p className="underNamePHome4">I´m Facundo, a Full Stack Web Developer, professional, resilient, eager to learn and
             with over 800 hours of academic and practical experience of my skills
             I'm exited to start working as a web developer in this new stage of my professional career.</p>
            <p className="underNamePHome4">You're welcome to explore my website and ask about anything!</p>
            <div className="moonIMGContainer"><img className="moonIMG" src={moon}></img></div>
            {/* <div><img className="stars" src={stars}></img></div> */}
            </div>
            {/* <button><Link to='/'>Go back</Link></button> */}
        </div>
    )
}

export default Home;