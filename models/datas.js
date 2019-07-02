const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new mongoose.Schema({
    item: [{
        type: Schema.Types.String,
    }],
    price: [{
        type: Schema.Types.Number,
    }],
    
    userId:{
        type: String,
        //required:true
    },
    emailId:{
        type:String,
    },
    nameId:{
        type:String
    }
    
}, { usePushEach: true });
const data = mongoose.model('data', dataSchema);
module.exports = data;