const mongoose=require('mongoose');
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
     },
     password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[6,"Password should be greater than 6 character"],
     },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports=Doctor;