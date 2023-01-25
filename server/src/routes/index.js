const express = require('express');
const router = express.Router();

const postsRoute = require('./posts');
const projectsRoute = require('./projects');
const register = require('./register');
const login = require('./login');

router.use('/posts', postsRoute);
router.use('/projects', projectsRoute);
router.use('/register', register);
router.use('/login', login);

module.exports = router;
