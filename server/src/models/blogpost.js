const mongoose = require('mongoose');
const mongoSettings = require('../config/database');

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  published: {type: Date, default: Date.now},
  hidden: {type: Boolean, default: false},
}, {versionKey: false});

const postModel = mongoose.model(
  mongoSettings.postCollection,
  postSchema,
);

module.exports = postModel;
