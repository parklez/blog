const mongoose = require('mongoose');

const mongoSettings = require('../config/database');

mongoose.pluralize(null);
// https://mongoosejs.com/docs/guide.html#strict
mongoose.set('strictQuery', true);

mongoose.connect(
  `mongodb://${mongoSettings.host}/${mongoSettings.database}?authSource=admin`,
  {
    'user': mongoSettings.user,
    'pass': mongoSettings.pass,
  },
).then(() => {
  console.log('MongoDB Connection stablished!');
}).catch((error) => {
  console.log('MongoDB failed to connect!');
  console.log(error);
});
