const mongoose = require('mongoose');
const mongoSettings = require('../config/database');

const projectSchema = new mongoose.Schema({
  title: {type: String, required: true},
  thumbnail: {type: String, required: true},
  description: {type: String, required: true},
  published: {type: Date, default: Date.now},
  hidden: {type: Boolean, default: false},
}, {versionKey: false});

const projectModel = mongoose.model(
  mongoSettings.projectsCollection,
  projectSchema,
);

module.exports = projectModel;
