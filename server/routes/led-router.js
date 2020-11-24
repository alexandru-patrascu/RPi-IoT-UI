const express = require('express');
const LedCtrl = require('../controllers/led-ctrl');

const router = express.Router();

router.get('/leds', LedCtrl.getAll);
router.get('/led/:_id', LedCtrl.getOne);
router.put('/led', LedCtrl.createOne);
router.post('/led', LedCtrl.updateOne);
router.put('/toggle-led/:_id', LedCtrl.toggleLed);
router.delete('/led/:_id', LedCtrl.deleteOne);

module.exports = router;
