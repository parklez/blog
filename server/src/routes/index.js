const path = require('path');
const express = require('express');
const router = express.Router();

const register = require('./register');
const login = require('./login');
const players = require('./players');

router.use('/register', register);
router.use('/login', login);
router.use('/players', players);
router.get('/games', (req, res) => {
    const file = path.join(__dirname, '../resources/games.json')
    res.setHeader('Content-Type', 'application/json');
    res.sendFile(file);
});

module.exports = router;
