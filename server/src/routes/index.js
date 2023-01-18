const express = require('express');
const router = express.Router();

const postsRoute = require('./posts');
const projectsRoute = require('./projects');


router.use('/posts', postsRoute);
router.use('/projects', projectsRoute);


module.exports = router;
