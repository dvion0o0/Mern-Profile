const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Enter Name'],
  },
  email: {
    type: String,
    required: [true, 'Enter Email Address'],
  },
  password: {
    type: String,
    required: [true, 'Enter Password'],
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = User = mongoose.model('user', UserSchema)
