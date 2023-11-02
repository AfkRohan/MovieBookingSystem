const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const ticketSchema = new mongoose.Schema({
    showId : {
        required : true,
        type : String
    },
    movieId : {
        required : true,
        type : String,
    },
    userId : {
        required : true,
        type : String,
    },
    seatNumber : {
        required : true,
        type : String,
    },
    screenNumber : {
        required : true,
        type : Number,
    }
});

const Tickets = mongoose.model('Tickets',ticketSchema);
module.exports = Tickets ;
