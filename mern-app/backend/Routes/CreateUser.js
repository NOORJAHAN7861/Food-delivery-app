
const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.post("/createuser",async (req,res)=>{
  try{
    User.create({
        name: req.body.name,
        password: req.body.password,
        email:req.body.email,
        location: req.body.location
    })
    res.json({success:true});
  }catch(error){
    console.log(console.error)
    res.json({success:false});
  }
})
module.exports = router;
