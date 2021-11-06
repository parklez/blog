const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {text: {type: String}},
  {versionKey: false},
);

module.exports = postSchema;
