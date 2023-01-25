const mongoose = require('mongoose');
const postModel = require('../../models/blogpost');

const updatePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json();
    }
    // TODO: In the future, prevent some fields from being updated
    const result = await postModel.updateOne({_id: req.params.id}, req.body);
    if (result.matchedCount && result.acknowledged) {
      return res.status(200).json(result);
    }
    return res.status(404).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

module.exports = updatePost;
