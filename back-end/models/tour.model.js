const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    User:{
        type:String,
        required: 'User ID Cannot be Empty'
    },
    Package:{
        type:String,
        required:'Package ID Cannot be Empty'
    },
    Start:{
        type:Date,
        required:'Start Date is required'
    },
    End:{
        type:Date,
    },
    Guide:{
        type:String,
        required:'Guide ID is Required'
    },
    Hotel:{
        type:String,
    }
})

mongoose.model('Tour', tourSchema);