import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container col-md-4" onClick={() => props.checkAndShuffle(props.id)}>
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default Card;