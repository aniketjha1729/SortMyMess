const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
const Mess = mongoose.model('mess', UserSchema);
module.exports = Mess;

