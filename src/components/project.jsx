import React from "react";

function Project(props) {
    return(
        <div className="container projectContainer">
        <h2><strong>{props.title}</strong></h2>
        <ul className="projectLI">
            <li>
            <span>{props.p1}</span>
            </li>
            <li>
            <span>{props.p2}</span>
            </li>
            <li>
            <span>{props.p3}</span>
            </li>
            <li>
            <span>{props.p4}</span>
            </li>
        </ul>
        </div>
    );
    
}

export default Project;