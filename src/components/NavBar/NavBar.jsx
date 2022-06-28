import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    const location = useLocation();

    return (
        <nav className={`${location.pathname === '/mazzeiPortfolio/summary' || '/mazzeiPortfolio/myProjects' ? "navSummary" : "nav"}`}>
            <Link className="textNav" to='/mazzeiPortfolio'>Web Developer</Link>
            <Link className="navText" to='/mazzeiPortfolio'>Home</Link>
            <Link className="navText" to='/mazzeiPortfolio/summary'>Summary</Link>
            <Link className="navText" to='/mazzeiPortfolio/myProjects'>Projects</Link>
            <Link className="navText" to='/mazzeiPortfolio/contact'>Contact</Link>
        </nav>
    )
}