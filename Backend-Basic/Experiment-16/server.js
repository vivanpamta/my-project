const express = require('express');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

// Apply logger middleware globally
app.use(logger);

// Public route (no authentication)
app.get('/public', (req, res) => {
    res.json({ message: 'This is a public route accessible to everyone.' });
});

// Protected route (requires Bearer token)
app.get('/protected', auth, (req, res) => {
    res.json({ message: 'This is a protected route. You provided the correct token!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

