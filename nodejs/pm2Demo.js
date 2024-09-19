
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

