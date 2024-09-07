const express = require('express');
const router = express.Router();

// Import db from index.js
const { db } = require('../index');  // Ensure path is correct

// Define the register route
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const query = 'INSERT INTO app_users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
});

module.exports = router;