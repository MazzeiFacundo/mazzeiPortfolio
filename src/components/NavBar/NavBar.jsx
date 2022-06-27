import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.css"

export default function NavBar() {
    const location = useLocation();

    return (
        <nav className={`${location.pathname === '/summary' || '/myProjects' ? "navSummary" : "nav"}`}>
            <Link className="textNav" to='/'>Web Developer</Link>
            <Link className="navText" to='/'>Home</Link>
            <Link className="navText" to='/summary'>Summary</Link>
            <Link className="navText" to='/myProjects'>Projects</Link>
            <Link className="navText" to='/contact'>Contact</Link>
        </nav>
    )
}