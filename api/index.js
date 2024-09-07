const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import cors

const app = express();
const port = 3001;

// Middleware to parse JSON bodies and handle CORS
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Create MySQL connection pool
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pc-builder'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Define a route to register users
app.post('/register', (req, res) => {
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});