// import express
const express = require("express");

//get router instance from express
const router = new express.Router();

// importing controller
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

// differrent paths for resolving requests
// router.get("/user/getUserDetails", (req, res) => {
//   res.send("inside getUserDetails route");
// });
router.post("/user/register", userController.register);
router.get("/user/getUserDetails", userController.getUserDetails);
router.post("/user/login",userController.login);
router.post("/project/addproject",projectController.addProject);


// export router
module.exports = router;
