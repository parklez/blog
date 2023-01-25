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
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).send({error});
  }
};

module.exports = getProjects;
