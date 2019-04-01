import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card col-md-4">
            <div className="img-container" onClick={() => props.checkAndShuffle(props.id)}>
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default Card;