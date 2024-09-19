// To make sure that all our children will have only 1 thread available
process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster')
const crypto = require('crypto')
// Checks weather it is cluster manager
console.log(cluster.isMaster);
//is the file being executed in master mode
if (cluster.isMaster){
  // run index.js in worker/child mode.
  cluster.fork();
  cluster.fork();
  //setting up additional children
  //cluster.fork();
  //cluster.fork(); 
  //cluster.fork();
  //cluster.fork();
}else{
  // the child/worker processes the request. 

  const express = require('express')
  const app = express()



  app.get('/',(req,res)=>{
    crypto.pbkdf2('a','b',100000,512, 'sha512',()=>{
      res.send("Hi there !")

    })
  })

  app.get('/fast',(req, res)=>{
    res.send("Fast!!!");
  })

  app.listen(3000)
}
