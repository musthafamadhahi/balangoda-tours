const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
    User:{
        type:String,
        required: 'User ID Cannot be Empty'
    },
    Unavailable:{
        type:Array,
        
    }
})

mongoose.model('Guide', guideSchema);