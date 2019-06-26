const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    messid1:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    member:[{
        type:Schema.Types.ObjectId,
        ref: 'datas'
    }]
}, { usePushEach: true });

const Member = mongoose.model('Member', UserSchema);

module.exports = Member;
