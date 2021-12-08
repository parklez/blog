const express = require('express');
const router = express.Router();
const getProjects = require('./get');
const publishProject = require('./post');

router.get('/:page?', getProjects);
router.post('/', publishProject);

module.exports = router;
