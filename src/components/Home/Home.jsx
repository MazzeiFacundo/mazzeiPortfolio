import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import NavBar from "../NavBar/NavBar";

function Home() {
    const dispatch = useDispatch()
    return (
        <div>
            <NavBar></NavBar>
            <h1>Facundo Mazzei</h1>
            <button><Link to='/'>Go back</Link></button>
        </div>
    )
}

export default Home;