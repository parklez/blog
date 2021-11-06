const express = require('express');
const router = express.Router();
const getPost = require('./get');

router.get('/:id?', getPost);

module.exports = router;
