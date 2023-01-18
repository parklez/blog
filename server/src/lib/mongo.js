const mongoose = require('mongoose');

const mongoSettings = require('../config/database');
const postSchema = require('../models/blogpost');
const projectSchema = require('../models/project');

mongoose.pluralize(null);

const mongoConnection = mongoose.createConnection(
  `mongodb://${mongoSettings.user}:${mongoSettings.pass}@${mongoSettings.host}:${mongoSettings.port}/${mongoSettings.database}?authSource=admin`
);
// Where is a better place to have all these models?
const postModel = mongoConnection.model(
  mongoSettings.postCollection,
  postSchema,
);

const projectModel = mongoConnection.model(
  'projects',
  projectSchema,
);

module.exports = {postModel, projectModel};
