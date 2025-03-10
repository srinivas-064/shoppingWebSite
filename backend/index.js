const express = require('express');
const mongoose = require('mongoose');

// connecting mongodb
mongoose.connect().then(()=>console.log('mongodb is connected')).catch((err)=> console.log('eroor found',err));
const app = express();

// for the middlewears
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("hello world");
});

app.listen(8000,()=> console.log("server is started at port number 8000"));