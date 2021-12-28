// 7TDXV3S@dtSLtDN
// 7TDXV3S@dtSLtDN
const express=require('express');
const path=require('path')
const Mongoose = require('mongoose');
const app=express()
const postRoutes=require("./routes/post")
const userRoutes=require("./routes/user")
Mongoose.connect("mongodb+srv://Amanjot:z9odQxvJwlddIW1W@cluster0.og4rl.mongodb.net/mylastang?retryWrites=true&w=majority").
then(()=>{
  console.log('hey mongoose workiun')
}).catch(()=>{
  console.log("connection failed")
})
app.use(express.json())

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization,X-Custom-Header,UserId");
res.setHeader("Access-Control-Allow-Methods","PUT,GET,PATCH,POST,DELETE,OPTIONS")
next();
})


app.use('/api/post/',postRoutes)

app.use('/api/user/',userRoutes)
module.exports=app;
