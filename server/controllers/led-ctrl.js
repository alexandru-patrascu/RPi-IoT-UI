const axios = require('axios');
const Led = require('../models/led-model');

const getAll = async (req, res) =>
  await Led.find({}, (error, leds) => {
    if (error || !leds.length)
      return res.status(404).json({ success: false, error });

    return res.status(200).json({ success: true, data: leds });
  }).catch(console.error);

const getOne = async (req, res) =>
  await Led.findOne({ _id: req.params._id }, (error, led) => {
    if (err || !led) return res.status(404).json({ success: false, error });

    return res.status(200).json({ success: true, data: led });
  }).catch(console.error);

const createOne = (req, res) => {
  const { body } = req;

  if (!body)
    return res.status(400).json({
      success: false,
      error: 'You must provide a body in order to create the led entity',
    });

  body.status = false;
  const led = new Led(body);

  led
    .save()
    .then((data) =>
      res.status(200).json({
        success: true,
        data,
      })
    )
    .catch((error) =>
      res.status(400).json({
        success: false,
        error,
      })
    );
};

const updateOne = async (req, res) => {
  const { body } = req;

  if (!body)
    return res.status(400).json({
      success: false,
      error: 'You must provide a body in order to perform the led update',
    });

  Led.findOne({ _id: req.params._id }, (err, led) => {
    if (err || !led)
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
  }).catch(console.error);
};

const toggleLed = async (req, res) =>
  Led.findOne({ _id: req.params._id }, async (err, led) => {
    if (err || !led)
      return res.status(404).json({
        err,
        message: 'Led not found!',
      });

    led.status = !led.status;

    try {
      axios({
        method: 'post',
        url: `http://192.168.100.8:5000/gpio/led/${led.gpioPin}/${led.status}`,
        data: {},
      });
    } catch (err) {
      console.error(
        'An error occurred while toggling the led. Please try again later!',
        err
      );
    }

    led
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          _id: led._id,
          message: 'Led updated!',
        })
      )
      .catch((e) =>
        res.status(404).json({
          e,
          message:
            'An error occurred while toggling the led. Please try again later!',
        })
      );
  });

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  toggleLed,
};
