const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
       
    },
    password: {
        type: String,
        
    }

});

const Member = mongoose.model('Member', UserSchema);

module.exports = Member;
