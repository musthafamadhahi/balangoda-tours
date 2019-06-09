const mongoose = require('mongoose');

const locSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: 'Location Name Cannot be Empty'
    },
    Coords:{
        type:Array,
        required:''
    },
    Files:{
        type:Array
    }
})

mongoose.model('Location', locSchema);