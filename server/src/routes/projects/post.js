const projectModel = require('../../models/project');

const publishPost = async (req, res) => {
  console.log(req.body);

  const incomingProject = projectModel(req.body);

  try {
    const result = await incomingProject.save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = publishPost;
