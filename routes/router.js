const express=require('express');
const{registerDocter} = require("../controllers/userControllers");
const router=express.Router();

router.post("/doctors/register", registerDocter);

module.exports=router;