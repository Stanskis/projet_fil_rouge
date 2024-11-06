const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

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

// Export db
module.exports = { db };

// Routes
const userAuth = require('./routes/auth');
const products = require('./routes/product');

app.use('/api/users', userAuth);
app.use('/api', products);



// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
