const projectModel = require('../../models/project');
const docsPerPage = 10;

const getProjects = async (req, res) => {
  const page = req.params.page ? req.params.page : 0;
  try {
    const results = await projectModel
      .find()
      .limit(docsPerPage)
      .skip(docsPerPage * page)
      .sort('-published');
    if (results && results.length > 0) {
      const total = await projectModel.countDocuments();
      return res.status(200).json({results, total, page});
    }
    return res.status(404).json();
  } catch (error) {
    return res.status(500).send({error});
  }
};

const getProject = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json();
    }
    const post = await projectModel.findById(req.params.id);
    if (post) {
      return res.status(200).json(post);
    }
    return res.status(404).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

module.exports = {getProject, getProjects};
