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

const createOne = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body in order to create the led entity',
    });
  }

  const led = new Led(body);

  led
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        _id: led._id,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error,
      });
    });
};

const updateOne = async (req, res) => {
  const { body } = req;

  if (!body)
    return res.status(400).json({
      success: false,
      error: 'You must provide a body in order to perform the led update',
    });

  Led.findOne({ _id: req.params._id }, (err, led) => {
    if (err)
      return res.status(404).json({
        err,
        message: 'Led not found!',
      });

    led.name = body.name;
    led.status = body.status;
    led.gpioPin = body.gpioPin;
    led
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          _id: led._id,
        })
      )
      .catch((error) =>
        res.status(404).json({
          success: false,
          error,
        })
      );
  });
};

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
