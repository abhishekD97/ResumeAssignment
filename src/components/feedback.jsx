import axios from "axios";
import React, {useState} from "react";


function Feedback(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    function handleNameChange(e){
        const name = e.target.value;
        setName(name);
    }
    function handleEmailChange(e){
        const email = e.target.value;
        setEmail(email);
    }
    function handlePhoneChange(e){
        const phone = e.target.value;
        setPhone(phone);
    }
    function handleSubmit(e){
        e.preventDefault();
        const feedback = {
            name:name,
            email:email,
            phone:phone
        }
        console.log(feedback)
        axios.post("http://localhost:4000/feedback", feedback, function(res){
            console.log(res.data)
        })
    }

    return (
        <div className="row">
        <div className="col-lg-3 mx-auto columnMargin">
        <form className="" onSubmit={handleSubmit}>
            <input  className="form-control" onChange={handleNameChange} type="text" name="name" placeholder="Enter Your Name" value={name}></input><br/>
            <input  className="form-control" onChange={handleEmailChange} type="email" name="email" placeholder="Enter Your Email" value={email}></input><br/>
            <input  className="form-control" onChange={handlePhoneChange} type="tel" name="contactNumber" placeholder="Enter Your Contact Number" value={phone}></input><br/>
            <button className="btn-block btn-dark" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        </div>
    );
}

export default Feedback;