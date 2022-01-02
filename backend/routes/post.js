const express = require("express");
const Post = require("../model/post");
const auth=require("../middleware/auth")
const app = express.Router();



app.post('',auth,(req,res)=>{
  Post.findOne({StudentId:req.body.StudentId}).then(post => {
    if (post) {
      res.status(404).json({ message: "PRN ALREADY EXIST" });
    } else {

      const data=new Post({
        StudentName: req.body.StudentName,
        StudentId:req.body.StudentId,
    sem:req.body.sem,
    ProfName:req.body.ProfName,
    BRANCH:req.body.BRANCH,
    division:req.body.division,
    ProfSubject:req.body.ProfSubject,
    Phone:req.body.Phone,
    ProfReview:req.body.ProfReview,
    courseName:req.body.courseName,
    courseReview:req.body.courseReview,
    ratings:req.body.ratings,
       // @ts-ignore
       owner:req.userData.userId
      })
      //  console.log(req.userData.userId)
      data.save().then(result=>{


        res.status(200).send({message:'helo',
        })
      })
    }
  });


})
// z9odQxvJwlddIW1W
app.get('',auth,(req,res)=>{

// console.log(req.userData.userId)


let fetchedpost;
Post.find().then((documents)=>{
  fetchedpost=documents


      res.send({
        message:'hi post recieved',
        post:fetchedpost
       })


  }) .catch(error => {
    res.status(500).send({
      message: "Unable to retrieve posts!"
    });
  });
})

app.delete('/:index',auth,(req,res)=>{
console.log(req.body)
  Post.deleteOne({StudentId:req.params.index}).then(data=>{
    console.log(req.body)
    res.status(200).send({
      message:'deleted'
    })
  }).catch(error => {
    res.status(500).send({
      message: "unable to delete!"
    });
  });

})
module.exports = app;
