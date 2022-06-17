import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./MyProjects.css"

function MyProjects() {
    return (
        <div className="projectsContainer">
            <NavBar></NavBar>
            <div>
                <h2>Bragi</h2>
                <p>Just as the Norse god, Bragi connects his other deities with music and poetry through his compositions, the main purpose of the Bragi App is to connect an artist with his fans through his music-oriented posts. You can follow your favourite artists, see their posts in real time, like them and see them on your profile, but above all you can choose to be Premium and feel much closer to your favourite singers, commenting on their posts and seeing exclusive posts for you.</p>
            </div>
            <div>
                <h2>G&#38;G</h2>
                <p>Lorem ipsusto, frtaeorttitorerra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            </div>
        </div>
    )
}

export default MyProjects;