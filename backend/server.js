const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { resolve } = require("url");


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());


mongoose.connect("mongodb://localhost:27017/kalpasDB",{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}, function(err){
    if(err){console.log(err);}else{console.log("no error");}
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User", userSchema);

const user = new User({
    name:"Abhishek Dolli",
    role:"Web Developer",
    email:"abhishekdolli@gmail.com",
    phone:"8904047354",
    location:"Hubli, Karnataka"
})

// user.save();

const userFeedbackSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})



const UserFeedback = mongoose.model("UserFeedback", userFeedbackSchema);


const skillsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
});

const Skill = new mongoose.model("Skill", skillsSchema);

app.get("/home", function(req,res){
    User.find(function(err,foundUsers){
        if(!err){
            res.json(foundUsers);
        }
    })
})

app.get("/resume", function(req,res){
    Skill.find(function(err,foundSkills){
        if(!err){
            res.json(foundSkills)
        }
    })
})

app.post("/feedback", function(request,response){
    console.log(request.body.name);
    const userfeedback = new UserFeedback({
        name:request.body.name,
        email:request.body.email,
        phone:request.body.phone
    })
    userfeedback.save(function(err){
        if(!err){
            response.json("feedback saved")
        }
    });
    // User.create([userfeedback], function(err){
    //     if(err){
    //         res.json(err);
    //     }else{
    //         res.json("added feedback")
    //     }
    // })
    })

app.listen(4000,function(){
    console.log("server up at http://localhost:4000")
})