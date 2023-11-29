const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')



const app = express()

app.listen(4000,()=>{
    console.log("Server is listening at port 4000 !!!!!!!!!!")
})

app.use(cors({
    origin:"*"
}))

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

const routes = require('./routes/web-config');

app.use('/api', routes)

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log("***Mongoose Connected***"))
  .catch((error) => console.log(error));


const movieSchema = new mongoose.Schema({
  name: String,
  trailerLink: String,
  image: String,
  description: String,
  languages: String,
  duration: String,
  genre: String,
  rating: Number,
  ageGroups: String,
});



const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  DateOfBirth: String,
  Password: String,
  Contact: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});






app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/login', async (req, res) => {
  try {
    const user = await User.findOne({
      'Contact.email': req.body.email,
      'Password': req.body.password
    });

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});