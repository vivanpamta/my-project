const jwt = require("jsonwebtoken");

const SECRET_KEY = "JWTSECRETKEY";

function verifyToken(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid token" });
    }
}

function roleCheck(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Access denied: insufficient role" });
        }
        next();
    };
}

module.exports = { verifyToken, roleCheck, SECRET_KEY };

