import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>Hello, portfolio</h1>
            <button><Link to='/home'>Start</Link></button>
        </div>
    )
}

export default LandingPage;