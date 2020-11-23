const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/rpi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => console.error('DB Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
