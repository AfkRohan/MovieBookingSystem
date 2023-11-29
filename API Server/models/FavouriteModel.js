const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const Favouritechema = new mongoose.Schema({
    movieId : {
        required : true,
        type : Object,
    },
    userId : {
        required : true,
        type : Object,
    }
});

const Favourite = mongoose.model('Favourite',Favouritechema);
module.exports = Favourite ;
