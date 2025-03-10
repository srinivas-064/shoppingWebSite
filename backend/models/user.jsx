const { timeStamp } = require('console');
const mongoose= require('mongoose');

// Schema
const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    number : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    }
},
{timestamps: true}
);

// Model 
const Customer = mongoose.model('customer',customerSchema);



