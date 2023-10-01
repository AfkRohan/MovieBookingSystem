const express = require('express');

const router = express.Router()

const User = require('../models/UserModel')

// API for creating a new user
router.post('/create',async (req,res)=>{
    const data = req.body
    console.log(data)
    try{
    const user = new User({
    FirstName : data.firstName,
    LastName : data.lastName,
    DateOfBirth: data.Date,
    Password:data.Password,
    Contact:{
        email:data.email,
        phone:data.phone
    }
    })
    const userInserted = await user.save();
      console.log(userInserted);
      res.send(userInserted);
    }
    catch(err){
      res.send(err)
    }
})
//Admin Login ApI
router.post('/admin-login',(req,res)=>{
  const data = req.body;
  const adminEmail = data.email;
  console.log(data)
  const adminPassword = data.Password;
  if(adminEmail==="Admin" && adminPassword==="Admin@cinemax" ){
    res.send("Admin Verified Successfully.")
  }
  else{
    res.send("Incorrect Email or Password")
  }
})

// Login API
router.post('/login',async (req,res)=>{
    const data = req.body;
    const userEmail = data.email;
    console.log(data)
    const userPassword = data.Password;
    User.findOne({ 
    "Contact.email" : userEmail,
    "Password" : userPassword
  }).then(
    (user)=>{
        console.log(user);
        res.send(user);
    }
  ).catch(
    (err)=>{
        console.log(err);
        res.send(err);
    }
  )
})

module.exports = router;