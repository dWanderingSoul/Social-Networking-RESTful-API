const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Import JWT library
const verifyToken = require('../middleware/verifyToken');

    
// Register a new user
// User registration route (POST request)
router.post('/register', async (req, res) => {
  // ... user registration logic ...
  app.post('/register', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ message: 'User created successfully!' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

  // Login and generate token (implement JWT for secure authentication)
  // ...
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // ... user authentication logic ...
  
    // If login is successful
    if (user) {
      const payload = {
        userId: user._id, // Replace with actual user ID from database
      };
  
      // Generate JWT token using a secret key (replace 'your_secret_key' with a strong, unique secret)
      const token = jwt.sign(payload, 'w2h4Qp01KYD');
  
      res.json({ message: 'Login successful!', token });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });





// Login route (POST request) with authentication logic
router.post('/login', async (req, res) => {
  // ... user login and authentication logic ...

});

// Post creation route (POST request) with authentication
router.post('/posts', async (req, res) => {
  // ... post creation logic with authorization check ...
      // Create a new post (requires authentication)
      app.post('/posts', async (req, res) => {
        try {
          const newPost = new Post({ content: req.body.content, author: req.userId });
          await newPost.save();
          res.json({ message: 'Post created successfully!' });
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });
});
router.post('/posts', verifyToken, async (req, res) => {
    // ... post creation logic using req.userId for authorization ...
  });
  
module.exports = router;
