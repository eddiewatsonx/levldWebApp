const express = require('express');
const pool = require('../db'); // This points to your db.js file
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
            [name, email, message]
        );
        res.status(201).json({ message: 'Contact form submitted successfully', contact: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;