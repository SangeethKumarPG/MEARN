exports.register = (req,res)=>{
    // console.log("Inside user register controller")
    res.status(200).json("registration request received")
}

exports.getUserDetails = (req,res)=>{
    res.status(200).json("Inside get user details controller")
}