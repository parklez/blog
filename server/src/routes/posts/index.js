const express = require('express');
const router = express.Router();
const {getPost, getPosts} = require('./get');
const updatePost = require('./put');
const deletePost = require('./delete');
const publishPost = require('./post');

const auth = require('../../middleware/auth');

router.get('/:id', getPost);
router.get('/', getPosts);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/', auth, publishPost);

module.exports = router;
