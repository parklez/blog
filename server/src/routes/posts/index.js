const express = require('express');
const router = express.Router();
const {getPost, getPosts} = require('./get');
const updatePost = require('./put');
const deletePost = require('./delete');
const publishPost = require('./post');

router.get('/:id', getPost);
router.get('/', getPosts);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/', publishPost);

module.exports = router;
