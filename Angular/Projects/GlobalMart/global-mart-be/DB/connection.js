const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB connected successfully");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});