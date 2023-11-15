const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const seatSchema = new mongoose.Schema({
    screen: {
        required : true,
        type : Number,
    },
    isAvailable : {
        default: true,
        type: Boolean,
    },
    row : {
        default: true,
        type : String
    },
    number : {
        default: true,
        type : Number
    },
    showId : { 
        required : true,
        type : Object
    },
    userId :{
        required: true,
        type: Object
    },
    price : {
        required : true,
        type : Number
    },
});

const Seat = mongoose.model('Seat',seatSchema);
module.exports = Seat ;
