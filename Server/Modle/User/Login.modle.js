const { default: mongoose } = require("mongoose");

const LoginSchema = mongoose.Schema({
    email:String,
    password:String,
})

const LoginModel = mongoose.model('singups',LoginSchema)
module.exports={LoginModel}