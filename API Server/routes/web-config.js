const express = require('express');

const router = express.Router()

const bcrypt = require('bcrypt')

const rounds = 10

const jwt = require('jsonwebtoken')

const verifyToken = require('../middlewares/auth')

const User = require('../models/UserModel')

// API for creating a new user
router.post('/create', async (req,res)=>{
    const data = req.body
    console.log(data)
    const email = data.email
    const userPassword = await bcrypt.hash( data.Password,rounds);

    try{
    let user = new User({
    FirstName : data.firstName,
    LastName : data.lastName,
    DateOfBirth: data.Date,
    Password:userPassword,
    Contact:{
        email:data.email,
        phone:data.phone
    }
    })
    let userInserted = await user.save();
    const token = jwt.sign(
      { user_id: userInserted._id,email},
      "UserSecret",
      {
        expiresIn: "2h",
      }
    );
    // save user token
  
      res.cookie('token', token);

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
    res.statusCode(404).send("Incorrect Email or Password")
  }
})

// Login API
router.post('/login',async (req,res)=>{
    const data = req.body;
    const userEmail = data.email;
    console.log(data)
    
    User.findOne({ 
    "Contact.email" : userEmail,
  }).then(
    (user)=>{
      let userLoggedIn = user
        console.log(userLoggedIn);
        bcrypt.compare(data.Password,user.Password,(err,match)=>{
          if(match){
            const token = jwt.sign(
              { user_id: userLoggedIn._id, userEmail },
              "UserSecret",
              {
                expiresIn: "2h",
              }
            );
        // save user token        
        res.cookie('token', token);

        console.log(userLoggedIn)
        res.send(userLoggedIn);
        }
        else if(!match){
          res.send("Invalid Password")
        }
        else{
          res.send(err)
        }
        })
        }
  ).catch(
    (err)=>{
        console.log(err);
        res.send(err);
    }
  )
})

router.get('/',verifyToken,(req,res)=>{
  console.log(req.cookies)
  res.send("Token verified")
})

module.exports = router;