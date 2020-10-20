const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LedSchema = new Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, required: true },
    gpioPin: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Led', LedSchema);
