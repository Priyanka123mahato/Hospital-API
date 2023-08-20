const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

module.exports.registerDocter=async(req,res,next)=>{
    try{
        const doctor =await Doctor.create(req.body);
        res.status(200).json({
            success:true,
            message: "doctor created successfully",
        });

    }catch(error){
        res.status(500).json({
            success: false,
            message:"could not create a doctor, internal server error"
        });
    }
};