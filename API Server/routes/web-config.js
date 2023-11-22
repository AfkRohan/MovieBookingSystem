const express = require('express');

const router = express.Router()

const bcrypt = require('bcrypt')

const rounds = 10

const jwt = require('jsonwebtoken')

const verifyToken = require('../middlewares/auth')

const User = require('../models/UserModel')

const Movie = require('../models/MovieModel')

const Show = require('../models/ShowsModel');

const Seat = require('../models/SeatModel');

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

//api to get all movies
router.get('/movies', async (req, res) => {
  try {
    const allMovies = await Movie.find({});
    res.json(allMovies);
  } catch (error) {
    console.error('Error loading movies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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
          if((data.Password).match(user.Password)) {
            const token = jwt.sign(
              { user_id: userLoggedIn._id, userEmail },
              "UserSecret",
              {
                expiresIn: "2h",
              }
            );
        // save user token        
        res.cookie('token', token);
      
            res.send(userLoggedIn)}
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

// Book a seat
router.post('/bookseats',async(req,res)=>{
  const data = req.body;
  console.log(data)
  const respseats = [];
  for(let i=0; i<data.length; i++){
  try{
      let seatConfirmation = await Seat({
      screen : data[i].screen, 
      isAvailable : data[i].isAvailable,
      number : data[i].number,
      row : data[i].row,
      showId: data[i].showId,
      userId : data[i].userId,
      price : data[i].price
    });
     let seat = await seatConfirmation.save();
     respseats.push(seat);
  }
  catch (er){
    res.send(er);
  }
}
res.send(respseats)
});

// seat cancellation byookings
router.get('/getseats/:id', async(req,res)=>{
  try{
    const userId = req.params.id;
    const cancelledSeats = [];
    let seatsBookedByUser = await Seat.find({
      userId : userId});
    for (let  i =0; i<seatsBookedByUser.length; i++){
    let seatDeleteConfirmation = await Seat.findOneAndDelete({
      userId : userId});
      cancelledSeats.push(seatDeleteConfirmation._id);
    }
    res.send(cancelledSeats);
  }
  catch (er){
    res.send(er);
  }
});

//  Bookings by SeatId
router.get('/bookedseats/:id', async(req,res)=>{
  try{
    const showId = req.params.id;
    const seatsByShow = await Seat.find({showId : showId});
    res.send(seatsByShow);
  }
  catch (er){
    res.send(er);
  }
});

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
  res.send(movie);
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
    rating:data.rating,
    duration:data.duration,
    genre: data.genre,
    languages: data.languages,
    ageGroups: data.ageGroups 
    }).then((movie)=>res.send(movie)).catch((err)=>{
    res.statusCode(400).send(err)
  })
})

// Delete a movie by ID
router.delete('/movie/:id',async (req,res)=>{
  const id = req.params.id
  Movie.findByIdAndDelete(id.toString()).then((movie)=> {
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
    duration:data.duration,
    rating:data.rating,
    genre: data.genre,
    languages: data.languages,
    ageGroups: data.ageGroups  })
    let movieInserted = await newmovie.save();
    // save user token
    console.log(movieInserted)
      res.send(movieInserted);
    }
    catch(err){
      res.send(err)
    }
})

// Get all shows
router.get('/show',async (req,res)=>{
  try {
     const allshows = await Show.find({});
     res.send(allshows)
  }
  catch(err) {
      res.send(err)
  }
})

// Get show by ID
router.get('/show/:id',async (req,res)=>{
  const id = req.params.id
  try{
  const show = await Show.findById(id);
  res.send(show)
  }
  catch(err){
    res.send(err)
  }
})

// Get show by movieID
router.get('/shows/:movieId',async (req,res)=>{
  const id = (req.params.movieId)
  try{
  const show = await Show.find({ movieId : id});
  console.log(show)
  res.send(show)
  }
  catch(err){
    res.send(err)
  }
})

// Update show by ID
router.put('/show/:id',async (req,res)=>{
  const id = req.params.id
  const data = req.body
  Show.findByIdAndUpdate(id.toString(),{ 
  showDate : data.showDate,
  showTime : data.showTime,
  movieId : JSON.stringify(data.movieId).replaceAll('"',''),
  screen: data.screen,
  isAvailable : ((data.isAvailable).toString().toLowerCase() === "true" ) ? true : false,
  price : data.price
  }).then((show)=>res.send(show)).catch((err)=>{
    res.statusCode(400).send(err)
  })
})

// Delete a show by ID
router.delete('/show/:id',async (req,res)=>{
  const id = req.params.id
  Show.findByIdAndDelete(id.toString()).then((show)=> {
    res.send(`Delete movie with id: ${id}`)
  } ).catch((err)=>{
    res.send(err);
  })
})

// Add a show
router.post('/addshow',async (req,res)=>{
  const data = req.body
    console.log(data)
    try{
      let newshow = new Show ({ 
        showDate : new Date(data.showDate),
        showTime : data.showTime,
        movieId : (data.movieId).toString().replaceAll('"',''),
        price : Number(data.price),
        screen: data.screen,
        isAvailable : data.isAvailable})
    let showInserted = await newshow.save();
    // save user token
    console.log(showInserted)
      res.send(showInserted);
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