import React, {useState} from "react";
import axios from "axios";


function Feedback(){
    const [feedback, setFeedback] = useState({
        name:"",
        email:"",
        phone:""
    })




    function handleSubmit(e){
        e.preventDefault();
    }

    function handleFunction(event){
        const { value, name } = event.target;

        setFeedback(function(prevValue){
            if(name==="name"){
                return {
                    name: value,
                    email: prevValue.email,
                    phone: prevValue.phone
                };
            }else if(name==="email"){
                return {
                    name:prevValue.name,
                    email:value,
                    phone:prevValue.phone
                };
            }else{
                return {
                    name:prevValue.name,
                    email:prevValue.email,
                    phone:value
                };
            }
        })

        const feedbackData = {
            name : feedback.name,
            email : feedback.email,
            phone : feedback.phone 
        }
        
        axios.post("http://localhost:4000/feedback", feedbackData, function(res){
            console.log(res.data)
        })
    }



    return (
        <div className="row">
        <div className="col-lg-3 mx-auto columnMargin">
        <form className="" onSubmit={handleSubmit}>
            <input  className="form-control" onChange={handleFunction} type="text" name="name" placeholder="Enter Your Name" value={feedback.name}></input><br/>
            <input  className="form-control" onChange={handleFunction} type="email" name="email" placeholder="Enter Your Email" value={feedback.email}></input><br/>
            <input  className="form-control" onChange={handleFunction} type="tel" name="contactNumber" placeholder="Enter Your Contact Number" value={feedback.phone}></input><br/>
            <button className="btn-block btn-dark" onClick={handleFunction}>Submit</button>
        </form>
        </div>
        </div>
    );
}

export default Feedback;