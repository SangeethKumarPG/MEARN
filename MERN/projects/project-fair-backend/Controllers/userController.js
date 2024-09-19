const users = require('../Models/userSchema')

exports.register = async (req,res)=>{
  // console.log("Inside user register controller")
  console.log(req.body)
  const {username, email, password} = req.body;
  try {
    // check email id is present or not
    const existingUser = await users.findOne({email:email})
    if(existingUser){
      res.status(400).json("Account already exists");
    }else{
      console.log("user does not exists");
      const newUser = new users({
        username:username,
        email:email,
        password:password,
        github:"",
        linkedin:"",
        profile:""
      });
      await newUser.save();

      res.status(200).json('Account created successfully!');
    }

  } catch (err) {
      res.status(401).json('registraion failed due to ',err)
  }
}

exports.getUserDetails = (req,res)=>{
  res.status(200).json("Inside get user details controller")
}
