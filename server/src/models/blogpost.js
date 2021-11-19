const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  published: {type: Date, default: Date.now},
  hidden: {type: Boolean, default: false},
}, {versionKey: false});

module.exports = postSchema;
