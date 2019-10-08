const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const query = require('../../database');

router.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            throw new Error(400);
        }
        const hash = await bcrypt.hash(password, 12);
        const { rows } = await query(
            `INSERT INTO users(username, password, email)
            VALUES ($1, $2, $3)
            RETURNING id;`, [username, hash, email]
        );
        const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(201).json({ token });

    } catch (err) {
        switch (err.message) {
            case '400':
                return res.status(400).json({ error: 'Request must include values for username, password, and email keys.' });
            default:
                return res.status(500).json({ error: 'There was a problem while creating user.' });
        }
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error(400);
        }
        const { rows } = await query(
            `SELECT username, password, email, thumbnail
            FROM users
            WHERE username = $1`, [username]
        );
        if (!rows || !rows[0]) {
            throw new Error();
        }
        const match = await bcrypt.compare(password, rows[0].password);
        if (!match) {
            throw new Error();
        }
        const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token });
    } catch (err) {
        switch (err.message) {
            case '400':
                return res.status(400).json({ error: 'Request must include values for username and password keys.' });
            default:
                return res.status(403).json({ error: 'Invalid credentials.' });
        }
    }
});

module.exports = router;