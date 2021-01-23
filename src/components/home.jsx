import React, { useState } from "react";
import axios from "axios";

function Home() {
    
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    function setVariables(data){
        setName(data[0].name);
        setRole(data[0].role);
        setEmail(data[0].email);
        setPhone(data[0].phone);
        setLocation(data[0].location);
    }

    axios.get("http://localhost:4000/home").then( (response) => {
        setVariables(response.data)        
    } )

    return (
        // <div className="row">
        //     <div className="col-lg-5 mx-auto columnMargin">
        //         <img className="profileImageCss" src="data:image/png;base64,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" alt="profilePic"></img>
        //     </div>
        //     <div className="col-lg-5 mx-auto columnMargin">
        //         <div className="card border-0">
        //             <div className="card-body cardBody">
        //                 <h2> {name} </h2>
        //                 <h6><strong> {role} </strong></h6>
        //                 <p> 📧 {email}</p>
        //                 <p> 📱 {phone}</p>
        //                 <p> 📍 {location}</p>
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div>
        <div className="HomePageIntroduction d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <p className="first">Hello</p>
            <h1 className="second">I'm Abhishek</h1>
            <h5 className="third">MERN Stack Developer</h5>
            <button className="btn btn-outline-secondary buttonIntro">HIRE ME</button>
        </div>
        <div className="profileSection container">
            <br/>
            <br />
            <h3>Profile</h3>
            <hr/>
            <br />
            <br />
            <h2><strong>Abhishek Dolli</strong></h2>
            <p>Full Stack MERN Developer</p>
            <br />
            <div className="row">
            <div className="col-lg-5 customfeedbackCard"></div>
            <div className="col-lg-5 customfeedbackCard">
            <table>
                <tr>
                    <td className="ProfileDataHeader">Date of birth</td>
                    <td className="ProfileDataIcon">🙎‍♂️</td>
                    <td className="ProfileData">November 30, 1997</td>
                </tr>
                <tr>
                    <td className="ProfileDataHeader">Address</td>
                    <td className="ProfileDataIcon">📍</td>
                    <td className="ProfileData">Hubli, Karnataka</td>
                </tr>
                <tr>
                    <td className="ProfileDataHeader">Phone</td>
                    <td className="ProfileDataIcon">📲</td>
                    <td className="ProfileData">890-404-7354</td>
                </tr>
                <tr>
                    <td className="ProfileDataHeader">E-mail</td>
                    <td className="ProfileDataIcon">📧</td>
                    <td className="ProfileData">abhishekdolli@gmail.com</td>
                </tr>
                <tr>
                    <td className="ProfileDataHeader">Website</td>
                    <td className="ProfileDataIcon">🌎</td>
                </tr>
            </table>
            </div>
            <br/>
            <br />
            </div>
        </div>
        </div>
    );
}

export default Home;