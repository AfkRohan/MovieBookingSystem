const mongoose = require('mongoose');

const url = "mongodb+srv://topa:topachuptha@cluster0.ldhu0gj.mongodb.net/movieApp?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
})
.then(console.log("***Mongoose Connected***"))
.catch((error)=>console.log(error))

const userSchema = new mongoose.Schema({

    FirstName :{
        type:String,
        required : true
    },
    LastName :{
        type:String,
        required : true
    },
    DateOfBirth:{
        type:String,
        required : true
    },
    Password:{
        type:String,
        required : true
    },
    Contact:{
        email:{
            type:String,
            required : true,   
            unique: true,
        },
        phone:{
            type:String,
            required : true   
        }
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User ;
