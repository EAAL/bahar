const mongoose = require('mongoose');
const DB = require('../config/db.conf');

mongoose.connect('mongodb://' + DB.IP + ':' + DB.PORT + '/' + DB.name, {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

module.exports = connection;
