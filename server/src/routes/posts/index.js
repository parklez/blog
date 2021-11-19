const express = require('express');
const router = express.Router();
const getPost = require('./get');
const publishPost = require('./post');

router.get('/:id?', getPost);
router.post('/', publishPost);

module.exports = router;
