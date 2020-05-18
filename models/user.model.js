const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  user_email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  user_password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  user_plan: {
    type: String,
  },
  user_plan_expires: {
    type: Date,
  },
  user_is_admin: Boolean,
});

module.exports = mongoose.model('User', User);
