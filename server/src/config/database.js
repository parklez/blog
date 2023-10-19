const mongodbSettings = {
  host: process.env.MONGO_HOST || 'localhost:27017',
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
  database: process.env.MONGO_DATABASE || 'blog',
  postCollection: process.env.MONGO_POST_COLLECTION || 'posts',
  projectsCollection: process.env.MONGO_PROJECT_COLLECTION || 'projects',
  usersCollection: process.env.MONGO_USER_COLLECTION || 'users',
};

module.exports = mongodbSettings;
