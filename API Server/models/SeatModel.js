const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const SeatSchema = new mongoose.Schema({
    seatNumber :{
        required : true,
        type : Number
    },
    row:{
        required : true,
        type : CharacterData
    },
    Screen : {
        required : true,
        type : Number
    }
});

const Seats = mongoose.model('Seats',SeatSchema);
module.exports = Seats ;
