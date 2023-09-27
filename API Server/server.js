const express = require('express')

const cors = require('cors')

const User = require('./models/UserModel')

const bodyParser = require('body-parser')

const app = express()

app.listen(4000,()=>{
    console.log("Server is listening at port 4000 !!!!!!!!!!")
})

app.use(cors({
    origin:"*"
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

// API for creating a new user
app.post('/create',async (req,res)=>{
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
      res.send(`<h1style='color:red;'>${err}</h1>`)
    }
})

// Login API
app.post('/login',async (req,res)=>{
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
