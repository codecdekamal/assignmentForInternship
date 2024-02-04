const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config()
router.post("/",async (req,res)=>{
    console.log(req.body)
    const {name,password,email,specialization} = req.body;
    const token =  await jwt.sign({name,email},process.env.MY_PRIVATE_KEY)
    res.status(201).json({token,name,email,specialization})
})
module.exports = router;