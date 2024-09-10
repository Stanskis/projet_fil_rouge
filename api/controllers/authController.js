const { db } = require('../index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        // Hashing pwd
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);

        const query = 'INSERT INTO app_users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ message: 'Server error' });
            }
            res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
        });
    } catch (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = (req, res) => {
    const {username , password} = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    const query = 'SELECT * FROM app_users WHERE username = ?';

    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ message: 'Server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = results[0];
        console.log('Stored Hashed Password:', user.password);

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log('Password Match:', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user.id_user }, 'your_jwt_secret', { expiresIn: '1h' });

        // Send the response with the token
        res.status(200).json({
            message: 'Login successful',
            token,
            userId: user.id_user,
            username:user.username,
        });
    });
}