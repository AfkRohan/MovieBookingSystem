const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const movieSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true
    },
    trailerLink :{
        type:String,
        required : true
    },
    image:{
        type: Buffer,
        required : true
    },
    description:{
        type:String,
        required : true
    },
    languages:{
        type:Array,
        required : true
    },
    genre:{
        type:Array,
        required : true
    },
    rating:{
        type: Number,
        required : true,   
    },
    ageGroups:{
        type: String,
        requied:true
    }
});

const Movie = mongoose.model('Movie',movieSchema);
module.exports = Movie ;
