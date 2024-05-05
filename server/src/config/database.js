const mongodbSettings = {
  host: process.env.MONGO_HOST || 'localhost:27017',
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
  database: process.env.MONGO_DATABASE || 'playersync',
  usersCollection: process.env.MONGO_USER_COLLECTION || 'users',
};

module.exports = mongodbSettings;
