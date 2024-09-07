const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Create MySQL connection
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

// Export db and app
module.exports = { db, app };

// Routes
const userRegister = require('./routes/Register');  // Ensure this path is correct

// Use the routes
app.use('/api/users', userRegister);  // Ensure '/api/users' is the intended route

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});