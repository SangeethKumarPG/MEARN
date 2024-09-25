const projects = require('../Models/projectSchema');
exports.addProject = async (req,res)=>{
  console.log("Inside addProject controller");
//  res.send("Inside addProject controller");
  const userId = req.payload;
  console.log("User Id : ",userId);
  // in request we are getting form data
  // so it is not possible to directly access this data
  // we need to use a mdule called multer
  
  const projectImage = req.file.filename;
  console.log("Project image file name : ", projectImage);
  const {title, language, github, website, overview} = req.body;
  try {
    const existingProject = await projects.findOne({github:github});
    if(existingProject){
      res.status(409).json("Project already exists");
    }else{
      const newProject = new projects({
        title,
        language,
        github,
        website,
        overview,
        projectImage,
        userId 
      });
      await newProject.save();
      res.status(200).json("Project uploaded successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json("Project upload failed",err);
  }


}

