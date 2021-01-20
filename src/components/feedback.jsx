import axios from "axios";
import React, {useState} from "react";


function Feedback(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    function handleNameChange(e){
        const names = e.target.value;
        setName(names);
    }
    function handleEmailChange(e){
        const emails = e.target.value;
        setEmail(emails);
    }
    function handlePhoneChange(e){
        const phones = e.target.value;
        setPhone(phones);
    }
    function handleSubmit(e){
        e.preventDefault();
        // console.log(name);
        const data = {
            name,
            email,
            phone
        }
        axios.post('http://localhost:4000/feedback', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    

    return (
        <div className="row">
        <div className="col-lg-3 mx-auto columnMargin">
        <form className="" onSubmit={handleSubmit}>
            <input  className="form-control" onChange={handleNameChange} type="text" name="name" placeholder="Enter Your Name" value={name}></input><br/>
            <input  className="form-control" onChange={handleEmailChange} type="email" name="email" placeholder="Enter Your Email" value={email}></input><br/>
            <input  className="form-control" onChange={handlePhoneChange} type="tel" name="phone" placeholder="Enter Your Contact Number" value={phone}></input><br/>
            <button className="btn-block btn-dark" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        </div>
    );
}

export default Feedback;