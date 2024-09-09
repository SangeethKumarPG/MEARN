const fs = require("fs");
const getFileData = () => {
  fs.readFile("./sample.txt",'utf-8' ,(err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      
    }
  });
};

getFileData();

module.exports = {getFileData};