const mongoose = require('mongoose');
const postModel = require('../../models/blogpost');

const deletePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json();
    }

    const post = await postModel.findById(req.params.id);

    if (!post) {
      return res.status(404).send();
    }

    if (post.userId != req.user.userId) {
      return res.status(403).json({error: 'Forbidden'});
    }

    const result = await postModel.deleteOne({_id: req.params.id});
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

module.exports = deletePost;
