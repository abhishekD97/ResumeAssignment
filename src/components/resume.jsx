import React from "react";


function Resume(){
    return (
        <div>
        <div className="HomePageIntroduction d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <p className="first">Hello</p>
            <h1 className="second" id="firstName">I'm Abhishek</h1>
            <h5 className="third" id="roleDescp">MERN Stack Developer</h5>
            <button className="btn btn-outline-secondary buttonIntro">HIRE ME</button>
        </div>
        <div className="resumeSection container">
        <h2><strong>Resume</strong></h2>
        <hr/>
        <br/>
        <br/>
        <div className="row">
        <div className="col-lg-8">
        <h2>Education</h2>
        <br/>
        <p className="degree"><strong>X</strong></p>
        <span className="school"><strong>Parivarthan Gurukul Heritage</strong></span><span className="float-right lorem">2004 - 2014</span><br/>
        <span className="resumeValues">Percentage</span><span className="float-right lorem">76.96%</span><br/>
        <span className="resumeValues">Location</span><span className="float-right lorem">Hubli, Karnataka</span>
        <p className="resumeValues">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere eros, vitae finibus massa. Nam placerat.</p>
        <br/>
        <p className="degree"><strong>Pre - University</strong></p>
        <span className="school"><strong>Adarsh Science College</strong></span><span className="float-right lorem">2004 - 2014</span><br/>
        <span className="resumeValues">Percentage</span><span className="float-right lorem">73%</span><br/>
        <span className="resumeValues">Location</span><span className="float-right lorem">Hubli, Karnataka</span>
        <p className="resumeValues">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere eros, vitae finibus massa. Nam placerat.</p>
        <br/>
        <p className="degree"><strong>Bachelor's Degree</strong></p>
        <span className="school"><strong>KLE Technological University</strong></span><span className="float-right lorem">2004 - 2014</span><br/>
        <span className="resumeValues">Percentage</span><span className="float-right lorem">76.96%</span><br/>
        <span className="resumeValues">Location</span><span className="float-right lorem">Hubli, Karnataka</span><br/>
        <span className="resumeValues">Electronics & Communication</span>
        <p className="resumeValues">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et posuere eros, vitae finibus massa. Nam placerat.</p>
        <br/>
        </div>
        <div className="col-lg-4 skillsColumn">
        <h2>Skills</h2>
        <br/>
            <p>
                HTML5
            </p>
            <p>
                CSS3
            </p>
            <p>
                JavaScript
            </p>
            <p>
                BootStrap
            </p>
            <p>
                JQuery
            </p>
            <p>
                ReactJs
            </p>
            <p>
                NodeJs
            </p>
            <p>
                APIs
            </p>
            <p>
                Embedded JavaScript(EJS)
            </p>
            <p>
                GitHub
            </p>
            <p>
                C++
            </p>
            <p>
                Python
            </p>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Resume;