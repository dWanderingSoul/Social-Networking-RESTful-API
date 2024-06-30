const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // Add other post properties as needed (e.g., creation date, likes, comments)
});

module.exports = mongoose.model('Post', postSchema);
