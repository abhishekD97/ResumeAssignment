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
        //<---------------------redirect command-------------------------------->
          window.location = "/resume";
        }

    return (
      <div>
      <div className="HomePageIntroduction d-flex flex-column min-vh-100 justify-content-center align-items-center">
      
      <h1 className="second" id="firstName">Feedback</h1>
      
      
  </div>
      <div className="feedbackSection">
      <div className="row feedbackRow">
        <div className="col-lg-6">
        <h2 className="feedbackHeader">Write Me</h2>
        <hr className="headerRuleFeedback"/>
        <form className="" onSubmit={handleSubmit}>
            <input  className="form-control mx-auto formInput" onChange={handleNameChange} type="text" name="name" placeholder="Enter Your Name" value={name} autoComplete="false"></input><br/>
            <input  className="form-control mx-auto formInput" onChange={handleEmailChange} type="email" name="email" placeholder="Enter Your Email" value={email}></input><br/>
            <input  className="form-control mx-auto formInput" onChange={handlePhoneChange} type="tel" name="phone" placeholder="Enter Your Contact Number" value={phone}></input><br/>
            <button className=" form-control btn-md btn-dark formButton" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        <div className="col-lg-6 textAreaSection">
        <textarea className="feedbackTextarea" placeholder="Enter Message Here"></textarea>
        </div>
      </div>
      </div>
      </div>
    );
}

export default Feedback;