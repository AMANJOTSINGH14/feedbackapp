const jwt =require("jsonwebtoken")
const auth =(req,res,next)=>{
try{


  const token=req.headers.authorization.replace('Bearer ','');

const decoded =jwt.verify(token,"this.is_the_memories.application")
console.log(decoded)
req.userData={userEmail:decoded.email,userId:decoded.id}
console.log(req.headers)
next();
}catch(error){
  res.status(401).send({message:"authdfsaf failed"})
}
}
module.exports=auth
