const express = require('express');

const router = express.Router()

const jwt = require('jsonwebtoken')

const verifyToken = require('../middlewares/auth')

const User = require('../models/UserModel')

// API for creating a new user
router.post('/create', async (req,res)=>{
    const data = req.body
    console.log(data)
    const email = data.email
    try{
    let user = new User({
    FirstName : data.firstName,
    LastName : data.lastName,
    DateOfBirth: data.Date,
    Password:data.Password,
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
      let userLoggedIn = user
        console.log(userLoggedIn);
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
  ).catch(
    (err)=>{
        console.log(err);
        res.send(err);
    }
  )
},verifyToken)

module.exports = router;