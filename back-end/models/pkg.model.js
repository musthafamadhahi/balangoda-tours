const mongoose = require('mongoose');

const pkgSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: 'Package Name Cannot be Empty'
    },
    Locations:{
        type:Array,
        required:''
    },
    Days:{
        type:Number,
        required:''
    }
})

mongoose.model('Package', pkgSchema);