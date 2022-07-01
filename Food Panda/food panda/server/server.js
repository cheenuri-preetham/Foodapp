const e = require("cors");
const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const app=express();
const alert=require("alert")
app.use(express.json());
app.use(cors());
app.listen("1000",(req,res)=>{
    console.log("ok")
})
mongoose.connect("mongodb://localhost:27017/mini",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){console.log("connected")}
    else{console.log("noit connected")}
})
const schem=new mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    conn:String
})
const User=new mongoose.model('register',schem);
app.post("/reg",async(req,res)=>{
    const {email,name,pass,conn}=req.body;
    const user=new  User({
        email,name,pass,conn
    })
    let exist=await User.findOne({email:email})
    if(!exist){
        if(pass===conn){
            await user.save();
        }
        else{
            alert("password not matched")
        }
    }
    else{
        alert("user exists")
    }
})
app.post("/login",async(req,res)=>{
    const {email,pass}=req.body;
    let exist=await User.findOne({email:email})
    if(exist){
        if(pass==exist.pass){
            alert("logged in successfully")
            return res.json(exist)
        }
        else{
            alert("wrong password")
        }
    }
    else{
        alert("User doesnt exist")
    }
})