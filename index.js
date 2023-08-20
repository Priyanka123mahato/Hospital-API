const express=require('express');
const bodyParser = require('body-parser');
const db = require("./config/database");
const router =require("./routes/router");

const app=express();
const port=8000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(router);

app.listen(port,(error)=>{
    if(error){
        console.log(`Error in connecting to server: ${error}`);
    }else{
        console.log('server is successfully up and running');
    }
})