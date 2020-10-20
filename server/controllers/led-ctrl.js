const axios = require('axios');
const Led = require('../models/led-model');

const getAll = async (req, res) => {
  await Led.find({}, (error, leds) => {
    if (err || !!leds.length)
      return res.status(404).json({ success: false, error });

    return res.status(200).json({ success: true, data: leds });
  }).catch((err) => console.error(err));
};

const getOne = async (req, res) => {
  await Led.findOne({ _id: req.params._id }, (error, led) => {
    if (err || !led) return res.status(404).json({ success: false, error });

    return res.status(200).json({ success: true, data: led });
  }).catch((err) => console.error(err));
};

const createOne = (req, res) => {};

const updateOne = async (req, res) => {};

const deleteOne = async (req, res) => {
  await Led.findOneAndDelete({ _id: req.params._id }, (error, led) => {
    if (err || !led) return res.status(404).json({ success: false, error });

    return res.status(200).json({ success: true, data: led });
  }).catch((err) => console.error(err));
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
