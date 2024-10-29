const users = require("../Models/userModel");
const jwt = require("jsonwebtoken");

exports.registerController = async (req, res) => {
  try {
    console.log("Inside register controller");
    const { username, password, email } = req.body;
    console.log(req.body);
    // res.status(200).json({message: "User registered successfully"});
    const existingUser = await users.findOne({ email: email });
    if (existingUser) {
      res.status(406).json("Account already exists");
    } else {
      try {
        const newUser = new users({
          username: username,
          email: email,
          password: password,
        });
        await newUser.save();
        res.status(200).json("successfully created");
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.loginController = async (req, res)=>{

    const { email, password } = req.body;
    try{
        const user = await users.findOne({ email: email });
        if(user){
            if(user.password === password){
              const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY);
              res.status(200).json({token: token});
            }
        }else{
           res.status(400).json("Invalid email or password");
        }
    }catch(err){
        console.log(err);
        res.status(401).json(err)
    }
}
