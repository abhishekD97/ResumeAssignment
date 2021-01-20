const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(bodyParser.urlencoded({extended:true}))
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

const User = mongoose.model("user", userSchema);

const userFeedbackSchema = new mongoose.Schema({
    name:{
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
    }
})


const UserFeedback = mongoose.model("userFeedback", userFeedbackSchema);


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

const Skill = new mongoose.model("skill", skillsSchema);

app.get("/:name", function(req,res){
    const target = req.params.name;
    // console.log(target);
    switch (target) {
        case "home":
            User.find(function(foundUsers){
                if(!foundUsers){
                    res.json("NO USERS")
                    console.log("No users found");
                }else{
                    res.json(foundUsers);
                }
            })
        break;
        case "resume":
            Skill.find(function(skills){
                if(!skills){
                    console.log("No skills found");
                }else{
                    res.json(skills);
                }
            })
        break;
        case "projects":
            res.json("/Wrong End Point");
        break;
        default:
        break;
    }
});

app.post("/feedback", function(request,response){
    const name = request.body.name;
    const email = request.body.email;
    const phone = request.body.phone;
        console.log(name);
        const feedback = new UserFeedback({
        name:name,
        email:email,
        phone:phone
        });
        feedback.save(function(err){
            if(err) {
                response.json(err);
                    } 
            else {
                response.json("feedback added");
                    } 
                })
})

app.listen(4000,function(){
    console.log("server up at http://localhost:4000")
})