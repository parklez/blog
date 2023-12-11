const express = require('express');
const router = express.Router();
const {getProject, getProjects} = require('./get');
const publishProject = require('./post');
const updateProject = require('./put');
const deleteProject = require('./delete');

const auth = require('../../middleware/auth');

router.get('/:page?', getProjects);
router.get('/:id', getProject);
router.post('/', publishProject);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;
