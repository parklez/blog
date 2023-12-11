const mongoose = require('mongoose');
const projectModel = require('../../models/project');

const updateProject = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json();
    }

    const project = await projectModel.findById(req.params.id);

    if (!project) {
      return res.status(404).send();
    }

    if (project.userId != req.user.userId) {
      return res.status(403).json({error: 'Forbidden'});
    }

    // TODO: In the future, prevent some fields from being updated
    const result = await projectModel.updateOne({_id: req.params.id}, req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

module.exports = updateProject;
