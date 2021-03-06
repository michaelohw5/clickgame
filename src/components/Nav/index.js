import React from "react";
import "./style.css";

function Nav(props) {
    return (

        <nav class="navbar navbar-dark fixed-top bg-dark">
            <div class="container">
                <h2>Click Game</h2>
                <h3>Score: {props.score}</h3>
                <h3>Top Score: {props.topScore}</h3>
            </div>
        </nav>
    );
}

export default Nav;
