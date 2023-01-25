const mongoose = require('mongoose');
const postModel = require('../../models/blogpost');
const maxDocuments = 10;

const getPost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json();
    }
    const post = await postModel.findById(req.params.id);
    if (post) {
      return res.status(200).json(post);
    }
    return res.status(404).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

const getPosts = async (req, res) => {
  const page = req.query.page || 0;
  try {
    const results = await postModel
      .find()
      .limit(maxDocuments)
      .sort({published: -1})
      .skip(page * maxDocuments);
    if (results) {
      return res.status(200).json(results);
    }
    return res.status(404).json();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {getPost, getPosts};
