const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other user properties as needed (e.g., email, bio, profile picture)
});

module.exports = mongoose.model('User', userSchema);
