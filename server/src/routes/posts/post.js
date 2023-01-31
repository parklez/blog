const postModel = require('../../models/blogpost');

const publishPost = async (req, res) => {
  try {
    req.body.userId = req.user.userId;
    const result = await postModel(req.body).save();
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = publishPost;
