const express = require('express');

const router = express.Router()

const bcrypt = require('bcrypt')

const rounds = 10

const jwt = require('jsonwebtoken')

const verifyToken = require('../middlewares/auth')

const User = require('../models/UserModel')

const Movie = require('../models/MovieModel')

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
          res.statusCode(404).send(err)
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

// Get all movies
router.get('/movie',async (req,res)=>{
  try {
     const allmovies = await Movie.find({});
     res.send(allmovies)
  }
  catch(err) {
      res.send(err)
  }
})

// Get movie by ID
router.get('/movie/:id',async (req,res)=>{
  const id = req.params.id
  try{
  const movie = await Movie.findById(id.toString());
  res.send(movie)
  }
  catch(err){
    res.send(err)
  }
})

// Update movie by ID
router.put('/movie/:id',async (req,res)=>{
  const id = req.params.id
  const data = req.body
  Movie.findByIdAndUpdate(id.toString(),{ 
    name :data.name,
    trailerLink : data.trailerLink,
    image:data.image,
    description:data.description,
    rating:data.rating }).then((movie)=>res.send(movie)).catch((err)=>{
    res.statusCode(400).send(err)
  })
})


// Delete a movie by ID
router.delete('/movie/:id',async (req,res)=>{
  const id = req.params.id
  Movie.findById(id.toString()).then((movie)=> {
    res.send(`Delete movie with id: ${id}`)
  } ).catch((err)=>{
    res.send(err);
  })
})

// Add a movie 
router.post('/addmovie',async (req,res)=>{
  const data = req.body
    console.log(data)
    try{
    let newmovie = new Movie ({ 
    name :data.name,
    trailerLink : data.trailerLink,
    image:data.image,
    description:data.description,
    rating:data.rating })
    let movieInserted = await newmovie.save();
    // save user token
      res.send(movieInserted);
    }
    catch(err){
      res.send(err)
    }
})

// Test Route
router.get('/',verifyToken,(req,res)=>{
  console.log(req.cookies)
  res.send("Token verified")
})


module.exports = router;