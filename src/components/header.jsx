import React from "react";

function Header(){
    return (
    <header> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">Brand</h3>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item"><a name="home" className="text-dark hoverli" href="/">Home</a></li>
            <li className="nav-item"><a name="resume" className="text-dark hoverli" href="/resume">Resume</a></li>
            <li className="nav-item bg-light"><a name="projects" className="text-dark hoverli" href="/projects">Projects</a></li>
            <li className="nav-item bg-light"><a name="feedback" className="text-dark hoverli" href="/feedback">Feedback</a></li>
            </ul>
            </nav>
    </header>
    );
}

export default Header;