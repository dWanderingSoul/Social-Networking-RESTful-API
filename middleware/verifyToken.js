const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from 'Bearer ' prefix

  try {
    const decoded = jwt.verify(token, 'w2h4Qp01KYD'); // Verify token using the same secret key
    req.userId = decoded.userId; // Attach decoded user ID to the request object
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
