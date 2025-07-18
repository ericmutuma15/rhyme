const jwt = require('jsonwebtoken');

function authenticateAdmin(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err || user.role !== 'Admin') return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
}

module.exports = { authenticateAdmin };
