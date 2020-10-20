const axios = require('axios');
const Led = require('../models/led-model');

const getAll = async (req, res) => {
  await Led.find({}, (err, leds) => {
    if (err || !!leds.length)
      return res.status(404).json({ success: false, error: 'Leds not found' });

    return res.status(200).json({ success: true, data: leds });
  }).catch((err) => console.error(err));
};

const getOne = async (req, res) => {};

const createOne = (req, res) => {};

const updateOne = async (req, res) => {};

const deleteOne = async (req, res) => {};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
