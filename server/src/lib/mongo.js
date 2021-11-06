const mongoose = require('mongoose');

const mongoSettings = require('../config/database');
const postSchema = require('../models/blogpost');

mongoose.pluralize(null);

const mongoConnection = mongoose.createConnection(
  `mongodb://${mongoSettings.host}:${mongoSettings.port}/${mongoSettings.database}`,
);
// Where would be a better place to have this model?
const postModel = mongoConnection.model(
  mongoSettings.postCollection,
  postSchema,
);

module.exports = postModel;
