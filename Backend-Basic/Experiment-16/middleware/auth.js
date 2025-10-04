// Middleware to verify Bearer token
const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    if (token === 'mysecrettoken') {
        next(); // Token is correct → allow request
    } else {
        return res.status(403).json({ error: 'Invalid or missing token' });
    }
};

module.exports = auth;
