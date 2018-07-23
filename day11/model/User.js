const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

// Userschema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: 'You must have a username'
  },
  password: String,
  email: {
    type: String,
    unique: true,
    trim: true,
    required: 'You must have a email address'
  }
})

UserSchema.plugin(passportLocalMongoose)

// User model
module.exports  = mongoose.model('User', UserSchema)