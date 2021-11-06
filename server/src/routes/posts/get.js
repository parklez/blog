const postModel = require('../../lib/mongo');
const maxDocuments = 10;

const getPost = async (req, res) => {
  try {
    // In case specific id was provided
    if (req.params.id) {
      const something = await postModel.findById(req.params.id);
      if (something) {
        return res.status(200).send(something);
      }
    // Returning 10 random documents - Should I split this function?
    } else {
      const results = await postModel.find().limit(maxDocuments).skip(0);
      if (results) {
        return res.status(200).send(results);
      }
    }

    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = getPost;
