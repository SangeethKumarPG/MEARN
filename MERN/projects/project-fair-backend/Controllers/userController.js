const users = require('../Models/userSchema')

exports.register = async (req,res)=>{
    // console.log("Inside user register controller")
    console.log(req.body)
    const {username, email, password} = req.body;
    // check email id is present or not
    const existingUser = await users.findOne({email:email})
    if(existingUser){
        res.status(400).json("Account already exists");
    }else{
        console.log("user does not exists");
        res.status(200).json('Account does not exist');
    }
    res.status(200).json("registration request received")
}

exports.getUserDetails = (req,res)=>{
    res.status(200).json("Inside get user details controller")
}