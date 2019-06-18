const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  messid: {
    type: String,
    required: true
  },
  messname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
