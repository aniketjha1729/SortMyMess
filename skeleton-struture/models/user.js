const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  messid: {
    type: String,
    
  },
  messname: {
    type: String,
    
  },
  password: {
    type: String,
    
  }
});
const User = mongoose.model('User', UserSchema);

module.exports = User;

