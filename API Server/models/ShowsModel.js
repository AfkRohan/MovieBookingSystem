const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const showSchema = new mongoose.Schema({
    showDate : {
        required : true,
        type : Date,
    },
    showTime : {
        required : true,
        type : String
    },
    movieId : {
        required : true,
        type : String,
    },
    price : {
        required : true,
        type : Number
    },
});

const Show = mongoose.model('Show',showSchema);
module.exports = Show ;
