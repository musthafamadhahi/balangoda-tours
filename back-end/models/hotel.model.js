const mongoose = require('mongoose');

const hotSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: 'Location Name Cannot be Empty'
    },
    Address:{
        type:String,
        required:''
    },
    Files:{
        type:Array
    }
})

mongoose.model('Hotel', hotSchema);